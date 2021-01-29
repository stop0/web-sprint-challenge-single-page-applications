import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Build Your Pizza!</h2>
            <h2>Your favorite food, delivered while coding</h2>
            <Link to='/pizza'>
                <button>Pizza?</button>
            </Link>
        </div>
    );
};
export default Home;