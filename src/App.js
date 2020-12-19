import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from './components/Form'
import Home from './components/Home'
import Confirmation from './components/Comfirm'
import './App.css'

const App = () => {


  const [order, setOrder] = useState({})



  return (
    <div>
      <h1>Lambda Eats</h1>

    <Route path='/' exact component={Home}/>
    <Route path='/pizza' component={() => <Form setOrder={setOrder} />}/>
    <Route path='/confirmation' component={() => <Confirmation order={order} />}/>
      </div>
  );
};
export default App;
