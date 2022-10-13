import "./Menu.css";
import { Link } from "react-router-dom";

function Menu(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Rouslan</Link>
                </li>
                <li>
                    <Link to="/page2">Bastien</Link>
                </li>
                <li>
                    <Link to="/page3">Cassandra</Link>
                </li>
                <li>
                    <Link to="/page4">Ibrahima</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
