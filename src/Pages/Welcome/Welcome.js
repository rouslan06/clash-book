import "./Welcome.css";
import { Link } from "react-router-dom";

function Welcome(){

    return(
        <div>
            <div id="Actus">
                <Link to="/page1">Welcome</Link>

            </div>            
        </div>        
    )
}

export default Welcome;