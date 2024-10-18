import React from "react";
import {Link} from 'react-router-dom';

function Home(){
    return(
        <>
            <h1 style={{ textAlign:"center" }}>Home Page</h1>
            <Link to = "/login">Login</Link>
            <Link to = "/signup">Signup</Link>
        </>
    )
}
export default Home;