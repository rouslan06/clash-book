import "./Welcome.css";
import { Link } from "react-router-dom";

function Welcome(){

    return(
        <div>
            <img src="/Img/header.png" alt="image menu" id="img"/>
            <div id="position">
                <button id="glitch">
                <Link to="/page1" id="enter">EXPLORE</Link>
                </button>

            </div>            
        </div>        
    )
}

export default Welcome;