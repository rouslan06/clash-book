import "./Menu.css";
// import "./Component/MediaQueries/Media.css";
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

    function UnSubmit() {
        localStorage.removeItem("token");
        localStorage.removeItem("userID");

        alert("Vous êtes deconnecté");
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

        console.log("dataaaa : ", data)
        const token = data.token;
        const message = data.message;

        if ( message == 'Wrong email or password' ) {
            alert("Veuillez remplir les champs de connection ci dessous");
        }
        if ( message != 'Wrong email or password' ) {
            alert("vous êtes connecté");
        }

        console.log("token : ", token);

        localStorage.setItem("token", JSON.stringify(token));

        getID();
    }

    // ------------------------------------------------------- //

    async function getID(){

        let token = JSON.parse(localStorage.getItem("token"));

        const optionsID = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            }
        }

        const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/clash-books/user", optionsID);
        
        const dataID = await response.json();
        const ID = dataID._id;

        localStorage.setItem("userID", JSON.stringify(ID));
        
        console.log("key user :", ID);

    }

    return (
        <div className="menu-container">
            <div className="menu-trigger" onClick={openClick}>
                {/* <img src="/Img/Me.png" alt="image menu" /> */}
                <span id="menu-text">M E N U</span>
            </div>
            {
                open && <nav id="navigation">
                <ul>
                    <li>
                        <Link to="/" id="style"><img src="/Img/maison.png" alt="icone" id="imgstyle" />WELCOME</Link>
                    </li>

                    <li>
                        <Link to="/page1" id="style"><img src="/Img/megaphone.png" alt="icone" id="imgstyle" />LE FIL D'ACTU</Link>
                    </li>

                    <li>
                        <Link to="/page5" id="style"><img src="/Img/user.png" alt="icone" id="imgstyle" />PROFIL</Link>
                    </li>

                    <li>
                     <Link to="/page2" id="style"><img src="/Img/document.png" alt="icone" id="imgstyle" /> INSCRIS TOI</Link>
                    </li>

                    <li>
                        <Link to="/page3" id="style"><img src="/Img/pencil.png" alt="icone" id="imgstyle" />NEW CLASH</Link>
                    </li>

                    <li>
                        <Link to="/page4" id="style"><img src="/Img/favorites.png" alt="icone" id="imgstyle" />TES POSTS</Link>
                    </li>
                 
                    <li>
                        <Link to="/" id="style"><img src="/Img/question.png" alt="icone" id="imgstyle" />FAQ</Link>
                    </li>
                </ul>

                <form id="connect" onSubmit={submit}>
                    <input
                        type="email" 
                        id="emailConnect" 
                        placeholder="Email" 
                        value={emailConnect}
                        onChange={onChange}
                    />

                    <input 
                        type="password"
                        id="passwordConnect"
                        placeholder="Password"
                        value={passwordConnect}
                        onChange={onChange}
                    />

                    <input 
                        type="submit" 
                        value="Connexion"
                        id="submitCo"
                    />
                </form>
                
                <form id="connect" onSubmit={UnSubmit}>
                    <input 
                        type="submit" 
                        value="Deonnexion"
                        id="submitCo"
                    />
                </form>
            </nav>
            }

        </div>
    )
}

export default Menu;