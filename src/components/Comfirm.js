import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'



const Confirmation = (props) => {
    const { order } = props


    const [post, setPost] = useState([])

    
    useEffect(() => {
        axios.post("https://reqres.in/api/users", order)
        .then((res) => {
            setPost(res.data)
      })
    
      },[]);


        console.log(post)


    return (
        <div>
            <h2>Thank you for your order!</h2>
            <h3> Approximate Time: Never </h3>
            {Object.keys(order).map(gori => {
                return <h4>{gori.toUpperCase()}{`: ${order[gori]}`} </h4>
            })}
            <Link to='/pizza'>
                <button>Want Another Pizza?</button>
            </Link>
            <Link to='/'>
                <button>Go To Home Page?</button>
            </Link>
        </div>
    );
};
export default Confirmation; 