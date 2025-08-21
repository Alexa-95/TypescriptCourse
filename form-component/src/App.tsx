import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import {useRef} from "react";
import Form from "./components/Form";

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Form>
        <Input label="Name" id="name" type="text" />
        <Input label="Age" id="age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;