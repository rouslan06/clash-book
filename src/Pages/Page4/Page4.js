import Menu from "../../Component/Menu/Menu";
import "./Page4.css";
import { useEffect, useState } from "react";
import Actus from "../../Component/Actus/Actus";


// Creation de la fonction Page4

function Page4() {

  // La variable d'état qui contient la liste des articles
  const [articles, setArticles] = useState([]);

  // Création de la fonction asynchrone pour récuperer les articles
  async function getArticles() {
    const optionsID = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      
    };

    const response = await fetch (
      "https://social-network-api.osc-fr1.scalingo.io/clash-book/posts?page=0&limit=5", optionsID);

    const dataID = await response.json ();
  
    const articles = dataID.posts;

    setArticles(articles);
  }


  useEffect(() => {getArticles();}, []);



  return (
    <div className="page4">
      <Menu />
      <div id="Page4">
        <span id="titleYourPost">PAGE DE IBRAHIMA</span>

        <ul id="entete">
        </ul>

        <ul id='LesPosts'>
          {articles.map((article, index) => <Actus
            key={index}
            index={index} 
            title={article.title}
            description={article.content}
            comments={article.comments}
            idPost={article._id}
            firstname={article.firstname}
          />)}
        </ul>

      </div>
    </div>
  );
}

export default Page4;
