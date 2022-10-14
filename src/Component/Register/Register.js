/**
 * Import de la fonction useState de la librairie react
 */
import { useState } from "react";
import "./Register.css";

/**
 * Creationn du composant Register qui va permettre à l'utilisateur de créer un profile
 * @returns Un formulaire d'inscription
 */
function Register(){
    
    //Création de la variable d'état qui regroupent tous les inputs du formulaire, ainsi que la fonction de mise à jour de la variable d'état 

    const [fisrtName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(e){
      const {id, value} = e.target;
      if(id === "firstName"){
        setFirstName(value);
    }
        if(id === "lastName"){
        setLastName(value);
    }
        if(id === "email"){
        setEmail(value);
    }
        if(id === "password"){
        setPassword(value);
    }
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(fisrtName, lastName, email, password);
        addUser();
    }

    async function addUser(){
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                fisrtname: fisrtName,
                lastname: lastName,
                email: email,
                password: password
            }),

        }

        let response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/clash-book/register`, options);

        let data = await response.json();

        console.log(data);
    }

    

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="firstName" 
                    onChange={handleChange} 
                    value={fisrtName}
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
                
                <input 
                    id="submit" 
                    type="submit"
                    value="Nouveau clasher"
                />          
            </form>
        </div>
    )
}

export default Register;