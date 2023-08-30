import React from "react";
import "./app.css"
import "./data"

function Home(props){
    
    return(
        <div className="images">
            <img src={props.woman} alt="woman" />
            <img src={props.man} alt="man" />

        </div>
    
)}

export default Home;