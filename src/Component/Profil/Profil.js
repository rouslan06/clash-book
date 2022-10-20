import { useState, useEffect } from "react";
import "./Profil.css";

function Profil() {
    //Création d'une variable contenant un objet avec les données de l'utilistateur
    const [user, setUser] = useState({ firstname: "", lastname: "", email: "" });

    /**
     * Création d'une fonction async avec une method get pour récupérer les données de l'utilisateur connecté
     */
    async function getInfo() {
        // On récupére le token enregistré préalablement dans le localStorage
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

        //On récupère les données qui vont nous servir
        const firstname = dataInfo.firstname;
        const lastname = dataInfo.lastname;
        const email = dataInfo.email;

        //Mise à jour de la variable user avec sa fonction setUser, les propriétés prennent la valeur des données
        setUser({firstname: firstname, lastname: lastname, email: email})
    }

    useEffect(()=>{getInfo()},[])

    /**
     * Création de la fonction async pour modifier les données utilisateur connecté
     */
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
        const newMember = data.success;

        if ( newMember === true ) {
            alert("Clasheur modifié");
        }
    }

    /**
     * Création d'une fonction qui va permettre d'écouter un event. On pourra changer la valeur des inputs
     * @param {*} e 
     */
    function firstnameChange(e){
        e.preventDefault();
        setUser({//MAJ de la variable user
            ...user,//permet de décomposer l'objet pour modifier la propriété firstname 
            firstname: e.target.value
        });
    }

    function lastNameChange(e){
        e.preventDefault();
        setUser({//MAJ de la variable user
            ...user,//permet de décomposer l'objet pour modifier la propriété lastname
            lastname: e.target.value
        });
    }

    function emailChange(e){
        e.preventDefault();
        setUser({//MAJ de la variable user
            ...user, //permet de décomposer l'objet pour modifier la propriété email
            email: e.target.value
        });
    }

    /**
     * Création d'une fonction qui va permettre d'écouter un event. Au click sur le bouton modifier la function modifier sera appeler
     * @param {} e 
     */
    function submitInfo(e){
        Modifier();
    }

    return (
        <div>

        <div className="info">
            <label id="inputProfilText" htmlFor="firstname">Prénom :</label>
            <input id="inputProfilStyle"
                name="firstname" 
                value={user.firstname}
                onChange={firstnameChange}
            />

            <label id="inputProfilText" htmlFor="lastname">Nom :</label>
            <input id="inputProfilStyle"
                name="lastname" 
                value={user.lastname}
                onChange={lastNameChange}
            />

            <label id="inputProfilText" htmlFor="email">Email :</label>
            <input id="inputProfilStyle"
                name="email" 
                value={user.email}
                onChange={emailChange}
            />

        </div>
            <button id="buttonProfil" onClick={submitInfo}>Modifier</button>
        </div>
    )
}

export default Profil;