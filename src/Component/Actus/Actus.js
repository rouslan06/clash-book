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