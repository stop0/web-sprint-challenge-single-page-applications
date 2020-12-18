import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from './components/Form'
import axios from "axios";
import formSchema from './components/Form'

const initialFormValues = {
  name: "",
  special: "",
  pizzaSize: "",
  pepperoni: false,
  beef: false,
  chicken: false,
  veggie: false
};





function App() {
  //Values of the form
  const [formValues, setFormValues] = useState(initialFormValues);
  //Storing the values from the form
  const [savedFormInfo, setSavedFormInfo] = useState([]);
  //State for errors
  //State to verify the post worked
  const [post, setPost] = useState([]);
  //The function to handle the onChange inside of the form
  const change = (evt) => {
    //Turns the evt.target(The place we are interacting with on the form )
    //Into something a bit more usable
    const { name, value } = evt.target;
    //Validates against schema
    validate(name, value);
    //sets the current state of form based off from what is in the form
    setFormValues({
      ...formValues,
      [name]:
        evt.target.type === "checkbox" ? evt.target.checked : evt.target.value,
    });
  };
  //Function for submitting the data to state.
  const submit = (evt) => {
    //Prevents the default behavious of submit which is reloading the page
    evt.preventDefault();
    //adding api support with axios
    axios.post("https://reqres.in/api/users", formValues).then((res) => {
      setPost(res.data);
      console.log(res.data);
    });
    //packaging an easy to use payload to put onto state
    const newData = {
      name: formValues.name.trim(),
      email: formValues.email.trimEnd(),
    };
    //adding the data to state
    setSavedFormInfo([...savedFormInfo, newData]);
    setFormValues(defaultValues);
  };
  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });
  };
  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);









  return (
    <div>
      <h1>Lambda Eats</h1>
      <nav>
        <h1 className='store-header'>Emily&apos;s Trinkets</h1>
        <div className='nav-links'>
          <Link to = "/">Home</Link>
          <Link to = "/pizza">Pizza</Link>
        </div>
      </nav>    
      < Form 
      formValues = {formValues}
      submit = {submit}
      
      
      />
      </div>
  );
};
export default App;
