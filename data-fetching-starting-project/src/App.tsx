import {get} from "./utils/http";
import {useEffect, useState, ReactNode} from "react";
import BlogPosts, {BlogPost} from "./components/BlogPosts";
import fetchingImage from '../src/assets/data-fetching.png'
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [fetchPosts, setFetchPosts] = useState<BlogPost[] | undefined>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const data = (await get('https://jsonplaceholder.typicode.com/posts')) as RawDataBlogPost[];
        const blogPosts: BlogPost[] = data.map(rawPost => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          }
        });
        setFetchPosts(blogPosts)
      } catch (error) {
        if(error instanceof Error) {
          setError(error.message);
        }
        // setError('Failed to fetch posts!');
      }
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  let content = ReactNode;

  if (error) {
    content = <ErrorMessage text={error} />
  }

  if(fetchPosts) {
    content = <BlogPosts posts={fetchPosts} />
  }

  if(isFetching) {
    content = <p id="loading-fallback">Fetching posts...</p>;
  }

  return (
    <main>
      <img src={fetchingImage} alt="An abstract image" />
      {content}
    </main>
  );
}

export default App;
