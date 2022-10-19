/**
 * Import de la fonction useState de la librairie react
 */
import { useState } from "react";
import "./Register.css";

/**
 * Creation du composant Register qui va permettre à l'utilisateur de s'inscrire sur le réseau social
 * @returns Un formulaire d'inscription
 */
function Register(){
    
    //Création des variables d'état qui regroupent tous les inputs du formulaire, ainsi que la fonction de mise à jour des variables d'état 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Création de la fonction handleChange. Lorsque l'utilisateur remplie les inputs, les variables d'état se mettront à jour grâce à leur fonction de mise à jour respective
    function handleChange(e){
        const {id, value} = e.target;
        if (id === "firstName"){
            setFirstName(value);
        }
        if (id === "lastName"){
            setLastName(value);
        }
        if (id === "email"){
            setEmail(value);
        }
        if (id === "password"){
            setPassword(value);
        }
    }

    //Création de la fonction handleSbmit qui va permettre d'enregistrer le formulaire d'inscription une fois remplie. e.preventDefault va empêcher la page de s'actualiser
    function handleSubmit(e){
        e.preventDefault();
        console.log(firstName, lastName, email, password);
        addUser();
    }

    //Création de la fonction addUser
    async function addUser(){
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
    
            body: JSON.stringify({
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password,
            }),
        }
    
        const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/clash-book/register`, options);
    
        const data = await response.json();

        console.log(data);
    }

    return (
        <div className="form" id="register">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="firstName" 
                    onChange={handleChange} 
                    value={firstName}
                    placeholder="Prénom"
                    required
                />
                
                <input 
                    type="text" 
                    id="lastName" 
                    onChange={handleChange} 
                    value={lastName}
                    placeholder="Nom"
                    required
                />
                
                <input 
                    type="email" 
                    id="email" 
                    onChange={handleChange} 
                    value={email}
                    placeholder="Email"
                    required
                />
                
                <input 
                    type="password" 
                    id="password"  
                    onChange={handleChange} 
                    value={password}
                    placeholder="Mot de passe"
                    required 
                />
                          
            </form>

            <button id="submitClasher" 
                type="submit">NEW CLASHER</button>

        </div>
    )
}

export default Register;