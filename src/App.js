import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Form from './components/Form'
import Home from './components/Home'
import Confirmation from './components/Comfirm'
import './App.css'
import styled from 'styled-components'

const Stylecard = styled.div`
box-shadow:
0 2.8px 2.2px rgba(0, 0, 0, 0.034),
0 6.7px 5.3px rgba(0, 0, 0, 0.048),
0 12.5px 10px rgba(0, 0, 0, 0.06),
0 22.3px 17.9px rgba(0, 0, 0, 0.072),
0 41.8px 33.4px rgba(0, 0, 0, 0.086),
0 100px 80px rgba(0, 0, 0, 0.12);
width:50%;
margin:5rem;
margin-left:23rem;

padding:5rem
`


const App = () => {


  const [order, setOrder] = useState({})



  return (
    <Stylecard>
      <h1>Lambda Eats</h1>

    <Route path='/' exact component={Home}/>
    <Route path='/pizza' component={() => <Form setOrder={setOrder} />}/>
    <Route path='/confirmation' component={() => <Confirmation order={order} />}/>
      </Stylecard>
  );
};
export default App;
