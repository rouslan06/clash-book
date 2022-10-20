import "./Welcome.css";
import { Link } from "react-router-dom";

function Welcome(){

    return(
        <div>
            <img src="/Img/header.png" alt="image menu" id="img"/>
            <div id="position">
                <Link to="/page1" id="enter">
                    <button id="glitch">
                        EXPLORE
                    </button>
                </Link>
            </div>            
        </div>        
    )
}

export default Welcome;