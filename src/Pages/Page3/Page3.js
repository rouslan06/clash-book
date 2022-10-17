import Menu from "../../Component/Menu/Menu";
import { useState } from 'react';
import "./Page3.css";
// import Navabar from "./Navabar/Navabar";
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function Page3() {
  /*pour afficher le post */
  const [message, setMessage] = useState("");

  /*pour envoyer un ficher img */
  const [postPicture, setPostPicture] = useState(null);

  /*pour envoyer un fichier video (non créé) */
  const [video, setVideo] = useState('');
  const [file, setFile] = useState();

  // const handlePicture = () => {
  // };

  const handlePost = () => {};
  const cancetPost = () => {};

  // -------------------------------------------------------------- //

  // Fetch , creer un post

  //Création des variables d'état qui regroupent tous les inputs du formulaire, ainsi que la fonction de mise à jour des variables d'état 
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
      console.log(content);
      addUser();
  }

  //Création de la fonction addUser
  async function addUser(){
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "bearer token"
        },

        Body: {
          title: String,
          content: String
        }
      }
  
      const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/clash-book/post`, options);
  
      const data = await response.json();
  
      console.log(data);
  }


  return (
    <div>
      {/* <Router> */}
        {/* <Navabar/> */}
        {/* <Switch> */}
          {/* <Route path='/' /> */}
        {/* </Switch> */}
      {/* </Router> */}
      
      <Menu />
      <div id="Page3">
        <h1>CREATE A NEW POST</h1>
        <div className="postStyle">

          <form>
            <div className="postForm">
              <textarea
                name="message"
                id="message"
                placeholder="Balance ton Clash"
                onChange={handleCom}
              />

              <div className="footerForm">

                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" />
                </form>

                <div className="btn">
                  <button className="cancel" onClick={cancetPost}>Annul le clash</button>
                  <button className="send" onClick={handleSubmit}>Envoie ton clash</button>
                </div>

              </div>
            </div>

          </form>
        </div>
      </div>
    </div>

  );
}

export default Page3;