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
                    <li id="style">
                        <Link to="/"><img src="/Img/maison.png" alt="icone" id="imgstyle" />WELCOME</Link>
                    </li>
                    <li id="style">
                        <Link to="/page1"><img src="/Img/megaphone.png" alt="icone" id="imgstyle" />LE FIL D'ACTU</Link>
                    </li>
                    <li id="style">
                     <Link to="/page2"><img src="/Img/document.png" alt="icone" id="imgstyle" /> INSCRIT TOI</Link>
                    </li>
                    <li id="style">
                        <Link to="/page3"><img src="/Img/pencil.png" alt="icone" id="imgstyle" />CREE TON CLASH</Link>
                    </li>
                    <li id="style">
                        <Link to="/page4"><img src="/Img/favorites.png" alt="icone" id="imgstyle" />TOUT TES POSTS</Link>
                    </li>
                    <li id="style">
                        <Link to="/"><img src="/Img/user.png" alt="icone" id="imgstyle" />PROFIL</Link>
                    </li>
                    <li id="style">
                        <Link to="/"><img src="/Img/question.png" alt="icone" id="imgstyle" />FAQ</Link>
                    </li>
                    <li id="style">
                        <Link to="/"><img src="/Img/log-out.png" alt="icone" id="imgstyle" />DECONNEXION</Link>
                    </li>
                </ul>

                <form id="connect" onSubmit={submit}>
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
                        id="sumit"
                    />
                </form>
            </nav>
            }

        </div>
    )
}

export default Menu;