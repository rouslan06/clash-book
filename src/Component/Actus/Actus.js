import "./Actus.css"
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

function Actus({ title, description }){

    const [count, updateCount] = useReducer(countReducer, 0);

    return(

        <li className="Actus">
            <h3>{title}</h3>
            <p>{description}</p>
            <div id="Boutons">
                <button id="Commentaire">#</button>
                <div id="lesLikes">
                    <button id="Like" onClick={() => updateCount("increment")}>+1</button>
                    <p id="likeTotal">{count} Likes</p>
                    <button id="Dislike" onClick={() => updateCount("decrement")}>-1</button>
                </div>
            </div>
        </li>
    )
}

export default Actus;