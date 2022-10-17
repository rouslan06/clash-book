import "./Menu.css";
import { Link } from "react-router-dom";
import { useState } from "react";


function Menu() {
    const [open, setOpen] = useState(false)

    function openClick() {
        setOpen(!open);
    }

    return (
        <div className="menu-container">
            <div className="menu-trigger" onClick={openClick}>
                <img src="/Img/Me.png" alt="image menu" />
            </div>
            {
            //     open && <nav id="navigation">
            //     <ul>
            //         <li>
            //             <Link to="/">LE FIL D'ACTU</Link>
            //         </li>
            //         <li>
            //             <Link to="/page2">INSCRIT TOI</Link>
            //         </li>
            //         <li>
            //             <Link to="/page3">CREE TON CLASH</Link>
            //         </li>
            //         <li>
            //             <Link to="/page4">TOUT TES POSTS</Link>
            //         </li>
            //     </ul>
            // </nav>
            }

<nav id="navigation">
                <ul>
                    <li>
                        <Link to="/">LE FIL D'ACTU</Link>
                    </li>
                    <li>
                        <Link to="/page2">INSCRIT TOI</Link>
                    </li>
                    <li>
                        <Link to="/page3">CREE TON CLASH</Link>
                    </li>
                    <li>
                        <Link to="/page4">TOUT TES POSTS</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Menu;