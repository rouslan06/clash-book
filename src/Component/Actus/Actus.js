import "./Actus.css"

function Actus({ title, description }){
    return(
        <li className="Actus">
            <h3>{title}</h3>
            <p>{description}</p>
            <div id="Boutons">
                <button id="Commentaire"></button>
                <button id="Like"></button>
                <button id="Dislike"></button>
            </div>
        </li>
    )
}

export default Actus;