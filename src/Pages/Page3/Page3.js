import Menu from "../../Component/Menu/Menu";
import { useState } from 'react';
import "./Page3.css";


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

  //const handlePost = () => {};
  const cancetPost = () => {};

  // -------------------------------------------------------------- //

  // Fetch , creer un post

  //Création des variables d'état qui regroupent tous les inputs du formulaire, ainsi que la fonction de mise à jour des variables d'état 
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");


  //Création de la fonction handleChange. Lorsque l'utilisateur remplie les inputs, les variables d'état se mettront à jour grâce à leur fonction de mise à jour respective
  function handleCom(e){
      const {id, value} = e.target;
      if (id === "message"){
        setContent(value);
      }
      if (id === "titrePost"){
        setTitle(value);
    }
  }

  //Création de la fonction handleSbmit qui va permettre d'enregistrer le formulaire d'inscription une fois remplie. e.preventDefault va empêcher la page de s'actualiser
  function handleSubmit(e){
      e.preventDefault();
      addPost();
  }

  //Création de la fonction addUser
  async function addPost(){

    let token = JSON.parse(localStorage.getItem("token"));

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`
      },
      body: JSON.stringify({
        title: title,
        content: content
      }),
    }

    const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/clash-book/post`, options);

    const data = await response.json();
    const checkLog = data.message;

    if ( checkLog === 'Title and content are required.') {
      alert("Veuillez remplir les champs ci-dessous pour poster");
    }
    if ( checkLog === 'Invalid token.' ) {
      alert("Veuillez vous connecter pour poster");
    }
    if ( checkLog != 'Invalid token.' || checkLog != 'Title and content are required.') {
      alert("Bravo ! Vous avez clashé");
    }
  }

  return (
    <div>
      <Menu />
      <div id="Page3">
        <span id="titleCreate">CREATE A NEW POST</span>
        <div className="postStyle">
          <div id="formCreate">
            <div className="postForm">
              <input placeholder="TON TITRE" id="titrePost" onChange={handleCom}></input>
              <textarea
                name="message"
                id="message"
                placeholder="Balance ton Clash"
                onChange={handleCom}
              />

              <div className="footerForm">

                <div className="btn">
                  <button className="cancel" onClick={cancetPost}>ANNULER</button>
                  <button className="send" onClick={handleSubmit}>POSTER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;