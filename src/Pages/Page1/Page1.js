import Menu from "../../Component/Menu/Menu";
import "./Page1.css";
import { useEffect, useState } from "react";
import Actus from "../../Component/Actus/Actus";

/**
 * Composant qui affiche la page d'accueil
 * Le composant doit récupérer une liste des posts depuis un serveur (clash-book)
 * Ensuite, il doit afficher cette liste des posts
 * @returns 
 */
function Page1(){

    // Création d'une variable d'état qui contient la liste des articles
    const [articles, setArticles] = useState([]);

    /**
     * Fonction me permettant de récupérer les posts
     */
    async function getArticles(){

        // Fonction afficher les posts
        const optionsID = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }

        const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/clash-book/posts?page=0&limit=5`, optionsID);
        
        const dataID = await response.json();
        const articles = dataID.posts;

        console.log("contenu des posts : ", articles);

        setArticles(articles);
    }

    // useEffect est une fonction qui se lance au moment de la création du composant et à chaque mise à jour
    // Le premier paramètre est la fonction qui se lancera
    // Le deuxième paramètre est une liste des dépendances. Ca veut dire que quand une variable de ce tableau est modifié, on relance la fonction
    useEffect(() => {
        //console.log("Je suis dans useEffect");

        // Je récupère les articles, c'est une fonction asynchone
        // Pour ne pas bloquer le code, je n'utilise pas await
        getArticles();
    }, []);

    // console.log("Post : ",articles);

    return(
        <div className="page1">
            <Menu />
            <div id="Actus">
                <h1 id="titre">CLASH TIME</h1>
                <div id="enTete">
                </div>
                <ul id='LesPosts'>
                    {articles.map((article, index) => <Actus
                        key={index}
                        index={index} 
                        title={article.title}
                        description={article.content}
                        comments={article.comments}
                        idPost={article._id}
                    />)}
                </ul>
            </div>            
        </div>        
    )
}

export default Page1;