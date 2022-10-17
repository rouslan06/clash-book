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

function Actus({ title, description}){

    //-----------------------------------------------------------//

    // variable d'etat qui compte les likes
    const [count, updateCount] = useReducer(countReducer, 0);

    //-----------------------------------------------------------//

    const [newTask, setNewTask] = useState("");
    const [tasksList, setTasksList] = useState([]);
  
    /**
     * L'utilisateur a cliqué sur le bouton Validation
     * Je modifie mes deux variables d'environnements
     */
    const addTask = () => {
      // Ajout de la tache actuelle à mon tableau
      tasksList.push(newTask);
  
      // Mise à jour de la variable d'environnement tasksList
      setTasksList(tasksList);
  
      // Mise à jour de la variable d'environnement newTask
      setNewTask("");
    }

    //L'input a changer de valeur, je met à jour ma variable d'environnement newTask
    const inputChange = (e) =>{
        setNewTask(e.target.value);
    }

    //-----------------------------------------------------------//

    async function getUser(){
        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzRkM2ZlY2NjYWY3ZjAwMWQ5MGRlNzgiLCJpYXQiOjE2NjYwMTY4MzIsImV4cCI6MTY2NjEwMzIzMn0.erZmixTBtfm3HxoQte38m54AzJhD3j5ULNGN7Gcdtx4"
            }
        }

        const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/clash-book/user`, options);

        const data = await response.json();

        console.log(data);
    }

    getUser();


    return(

        <li className="Actus">
            <h3>{title}</h3>
            <p>{description}</p>
            <div id="Boutons">
                <div id="SectionAjout">  
                    <button id="addCom" onClick={addTask}>#</button>
                    <input id="Commentaire" onChange={inputChange} value={newTask} placeholder="Trash talkez"></input>
                </div>
                <div id="lesLikesPost">
                    <button id="Like" onClick={() => updateCount("increment")}>👍</button>
                    <p id="likeTotal">{count} ❤️</p>
                    <button id="Dislike" onClick={() => updateCount("decrement")}>👎</button>
                </div>
            </div>
            <ul id="colonneCom">
                {tasksList.map((activeTask, index) => <Commentaire content={activeTask} key={index} index={index}/>)}
            </ul>
        </li>
    )
}

export default Actus;