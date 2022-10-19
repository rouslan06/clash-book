import { useState, useEffect} from "react";
import "./Profil.css";



function Profil(){
    const [user, setUser] = useState({firstname: "", lastname: "", email: ""});

    async function getInfo(){
        let token = JSON.parse(localStorage.getItem("token"));
    
        const optionsInfo = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            }
        }
    
        const responseInfo = await fetch("https://social-network-api.osc-fr1.scalingo.io/clash-book/user", optionsInfo);
    
        const dataInfo = await responseInfo.json();
    
        const firstname = dataInfo.firstname;
        const lastname = dataInfo.lastname;
        const email = dataInfo.email;

        setUser({firstname: firstname, lastname: lastname, email: email})
        console.log(dataInfo);
    }
    
    useEffect(()=>{getInfo()},[]);

    return (
        <div>
            <p>Prénom: {user.firstname} </p>
            <p>Nom: {user.lastname}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default Profil;