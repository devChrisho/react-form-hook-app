import "./App.css";
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className='App'>
      <h1>React-Hook-Form and Material-UI project</h1>

      <form>
        <TextField id='firstName' label='First Name' variant='outlined' />
        <TextField id='firstName' label='First Name' variant='outlined' />
        <TextField id='firstName' label='First Name' variant='outlined' />
        <TextField id='firstName' label='First Name' variant='outlined' />
      </form>
    </div>
  );
}

export default App;
