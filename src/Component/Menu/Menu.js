import "./Menu.css";
import { Link } from "react-router-dom";
import { useState } from "react";


function Menu() {
    const [open, setOpen] = useState(false)

    function openClick() {
        setOpen(!open);
    }

    const [emailConnect, setEmailConnect] = useState("");
    const [passwordConnect, setPasswordConnect] = useState("");

    function onChange(e){
        const {id, value} = e.target;
        if (id === "emailConnect") {
            setEmailConnect(value)
        }
        if (id === "passwordConnect") {
            setPasswordConnect(value)
        }
    }

    function submit(e){
        e.preventDefault();
        login();
    }

    async function login(){
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
    
            body: JSON.stringify({
                email: emailConnect,
                password: passwordConnect,
            }),
        }
    
        const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/clash-book/login`, options);
    
        const data = await response.json();
    
        console.log(data);
    }

    return (
        <div className="menu-container">
            <div className="menu-trigger" onClick={openClick}>
                <img src="/Img/Me.png" alt="image menu" />
            </div>
            {
                open && <nav id="navigation">
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

                <form onSubmit={submit}>
                    <input
                        type="email" 
                        id="emailConnect" 
                        placeholder="Email" 
                        value={emailConnect}
                        onChange={onChange}
                        required
                    />

                    <input 
                        type="password"
                        id="passwordConnect"
                        placeholder="Password"
                        value={passwordConnect}
                        onChange={onChange}
                        required
                    />

                    <input 
                        type="submit" 
                        value="Connexion"
                    />
                </form>
            </nav>
            }

        </div>
    )
}

export default Menu;