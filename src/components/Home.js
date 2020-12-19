import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Build you Pizza !</h2>
            <Link to='/pizza'>
                <button>Pizza</button>
            </Link>
        </div>
    );
};
export default Home;