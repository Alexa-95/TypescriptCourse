import Input from "./components/Input";
import Button from "./components/Button";
import Form, {FormHandle} from "./components/Form";
import {useRef} from "react";

function App() {
  const customForm = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    const extractData = data as {name: string; age: string};
    console.log(extractData)
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSubmit={handleSave} ref={customForm}>
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