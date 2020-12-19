import React from "react";
import { Link } from "react-router-dom";




const Confirmation = (props) => {
    return (
        <div>
            <h2>Thank you for your order!</h2>
            <h3> Approximate Time: 10 min </h3>
            {Object.keys(props.order).map(newProp => {
                return <h4>{newProp}: {props.order[newProp]}</h4>
            })}
        </div>
    );
};
export default Confirmation; 