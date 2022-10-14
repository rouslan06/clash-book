import Menu from "../../Component/Menu/Menu";
import "./Page4.css";
import { useEffect, useState } from "react";


// Creation de la fonction Page4

function Page4() {

  // Création de la variable d'état qui contient la liste des articles
  const [articles, setArticles] = useState([]);

  // Création d'une variable d'état qui contient la liste ("")
  const [userPage4, setUserPage4] = useState("");

  // Création de la fonction asynchrone
  async function getArticles() {
        }


  const handlePage4Change = (e) => {
    const inputValue = e.target.value;
    setUserPage4(inputValue);

  };

  useEffect(() => {
    console.log("je suis là");
    getArticles();
  },
    [userPage4]);
  


  return (
    <div>
      <Menu />
      <div id="Page4">
        <h1>Page de Ibrahima</h1>
        <ul>
        <p>pages récentes</p>
        <button> {"retour accueil"}</button>
          <p> Liste des articles :</p>
    
        </ul>
        <div className="listearticles">
        <li> Former Uber security chief found guilty:

            <br />
            Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.
          </li>
          <br />
          <li> Former Uber security chief found guilty:
            <br />
            Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.
          </li>
          <br />
          <li> Google’s partnering with Coinbase to let cloud customers pay in crypto next year
            :
            <br />
            Starting in 2023, Google will partner with Coinbase to power crypto-based transactions for “select” customers in the Web3 space.


          </li>
          <br />
          <li> Former Uber security chief found guilty:
            <br />
            Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.
          </li>
          <br />
          <li> Former Uber security chief found guilty:
            <br />
            Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.
          </li>
          </div>
          
      </div>
    </div>
  );
}

export default Page4;
