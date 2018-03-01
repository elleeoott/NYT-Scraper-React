import React from "react";

//Render our header to the page

const Header = ({ children }) =>
    <div style={{height: 400, width:1000, textAlign:"center", border: ' solid 1px'}} className="jumbotron">
        {children}
    </div>;

export default Jumbotron;