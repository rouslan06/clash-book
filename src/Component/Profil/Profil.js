import { useState, useEffect } from "react";
import "./Profil.css";

function Profil() {
    const [user, setUser] = useState({ firstname: "", lastname: "", email: "" });

    async function getInfo() {
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
        console.log("datainfo", dataInfo);
    }

    useEffect(()=>{getInfo()},[])

    async function Modifier(){
        let token = JSON.parse(localStorage.getItem("token"));

        const optionsModif = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            },

            body: JSON.stringify ({
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email
            }),
        }

        const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/clash-book/user", optionsModif);

        const data = await response.json();

    }

    function firstnameChange(e){
        e.preventDefault();
        setUser({
            ...user,//permet de décomposer l'objet pour modifier les éléments 
            firstname: e.target.value
        });
    }

    function lastNameChange(e){
        e.preventDefault();
        setUser({
            ...user,
            lastname: e.target.value
        });
    }

    function emailChange(e){
        e.preventDefault();
        setUser({
            ...user,
            email: e.target.value
        });
    }

    function submitInfo(e){
        Modifier();
    }

    return (
        <div className="info">
            <label htmlFor="firstname">Prénom</label>
            <input 
                name="firstname" 
                value={user.firstname}
                onChange={firstnameChange}
            />

            <label htmlFor="lastname">Nom</label>
            <input 
                name="lastname" 
                value={user.lastname}
                onChange={lastNameChange}
            />

            <label htmlFor="email">Email</label>
            <input 
                name="email" 
                value={user.email}
                onChange={emailChange}
            />

            <button onClick={submitInfo}>Modifier</button>
        </div>
    )
}

export default Profil;