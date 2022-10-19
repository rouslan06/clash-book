import "./Actus.css"
import { useReducer } from "react";
import { useState } from "react";
import Commentaire from "../Commentaire/Commentaire";


function countReducer(state, action) {
    if(action === "increment") {
        return state + 1;
    } else if (action === "decrement") {
        return state - 1;
    } else {
        throw new Error();
    }
}

// affiche une actu 

function Actus({ title, description, comments, index}){

    // console.log("commentaire du post : ", comments);

    //console.log("key : ", index);

    //-----------------------------------------------------------//

    // variable d'etat qui compte les likes
    const [count, updateCount] = useReducer(countReducer, 0);

    //-----------------------------------------------------------//

    const [commentsPost, setCommentsPost] = useState("");
  
    /**
     * L'utilisateur a cliqué sur le bouton Validation
     * Je modifie mes deux variables d'environnements
     */
    const handleCom = () => {
        // Ajout de la tache actuelle à mon tableau
        

        // Mise à jour de la variable d'environnement newTask
        setCommentsPost("");
    }

    //Création de la fonction handleSbmit qui va permettre d'enregistrer le formulaire d'inscription une fois remplie. e.preventDefault va empêcher la page de s'actualiser
    function handleSubmit(e){
        e.preventDefault();
        getComment();
    }

    async function getComment(){

        let token = JSON.parse(localStorage.getItem("token"));

        // Fonction afficher les posts
        const optionsID = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            },
            body: JSON.stringify({
                postId: "634fdee2ccaf7f001d9658bf",
                content: "634fdee2ccaf7f001d9658bf"
            }),
        }

        const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/clash-book/post/comment", optionsID);
        
        const dataID = await response.json();

        // verification si envoyé
        // console.log("Comentaire envoyé : ", dataID)

        setCommentsPost(commentsPost);
    }

    //-----------------------------------------------------------//
    

    return(

        <li className="Actus">
            <h3>{title}</h3>
            <p>{description}</p>
            <div id="Boutons">
                <div id="SectionAjout">  
                    <button id="addCom" onClick={handleSubmit}>#</button>
                    <input id="Commentaire" onChange={handleCom} placeholder="Trash talkez"></input> 
                </div>
                <div id="lesLikesPost">
                    <button id="Like" onClick={() => updateCount("increment")}>👍</button>
                    <p id="likeTotal">{count} ❤️</p>
                    <button id="Dislike" onClick={() => updateCount("decrement")}>👎</button>
                </div>
            </div>
            <ul id="colonneCom">
                {comments.map((postCom, index) => <Commentaire 
                    key={index} 
                    index={index}
                    comments={postCom}/>
                )}
            </ul>
        </li>
    )
}

export default Actus;