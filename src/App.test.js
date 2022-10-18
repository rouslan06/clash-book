import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


/*


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

function Actus({ title, description }){

    //-----------------------------------------------------------//

    // variable d'etat qui compte les likes
    const [count, updateCount] = useReducer(countReducer, 0);

    //-----------------------------------------------------------//

    const [content, setContent] = useState("");

    //Création de la fonction handleChange. Lorsque l'utilisateur remplie les inputs, les variables d'état se mettront à jour grâce à leur fonction de mise à jour respective
    function handleCom(e){
        const {id, value} = e.target;
        if (id === "Commentaire"){
            setContent(value);
        }
    }

    //Création de la fonction handleSbmit qui va permettre d'enregistrer le formulaire d'inscription une fois remplie. e.preventDefault va empêcher la page de s'actualiser
    function handleSubmit(e){
        e.preventDefault();
        console.log("contenu du post : ", content);
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
                postId: String,
                content: String
            }),
        }

        const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/clash-book/post/comment", optionsID);
        
        const dataID = await response.json();
        const CommentContent = dataID.posts;
        const commentPost = CommentContent.comments;

        console.log("contenu du com : ", commentPost);

        setContent(content);
    }

    //-----------------------------------------------------------//

    return(

        <li className="Actus">
            <h3>{title}</h3>
            <p>{description}</p>
            <div id="Boutons">
                <div id="SectionAjout">  
                    <button id="addCom" onClick={handleCom}>#</button>
                    <input id="Commentaire" onChange={handleSubmit} placeholder="Trash talkez"></input> 
                </div>
                <div id="lesLikesPost">
                    <button id="Like" onClick={() => updateCount("increment")}>👍</button>
                    <p id="likeTotal">{count} ❤️</p>
                    <button id="Dislike" onClick={() => updateCount("decrement")}>👎</button>
                </div>
            </div>
            <ul id="colonneCom">
                {content.map((postCom, index) => <Commentaire 
                    key={index} 
                    content={postCom.content}/>)}
            </ul>
        </li>
    )
}

export default Actus;



*/