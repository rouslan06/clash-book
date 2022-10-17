import "./Commentaire.css";
import { useReducer } from "react";

function countReducer(state, action) {
    if(action === "increment") {
        return state + 1;
    } else if (action === "decrement") {
        return state - 1;
    } else {
        throw new Error();
    }
}

function Commentaire(props) {

     // variable d'etat qui compte les likes
     const [count, updateCount] = useReducer(countReducer, 0);

    return (
        <li id="BlocCom">
            <div id="BlocGauche">
                <div id="AuteurCom">
                    <p id="Auteur">Clashé par :</p>
                    <p id="Underline">Coca</p>
                </div>
                <div id="Bloc">
                    <p id="Com">{props.content}</p>
                    <div id="lesLikes">
                        <button id="Like" onClick={() => updateCount("increment")}>👍</button>
                        <p id="likeTotal">{count} ❤️</p>
                        <button id="Dislike" onClick={() => updateCount("decrement")}>👎</button>
                    </div>
                </div>
            </div>
            <div id="Poubelle">🚮</div>
        </li>
    )
}

export default Commentaire;