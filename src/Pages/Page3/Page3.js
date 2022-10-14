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

  const handlePost = () => {};
  const cancetPost = () => {};

  return (
    <div>
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
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="footerForm">

                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" />
                </form>

                <div className="btn">
                  <button className="cancel" onClick={cancetPost}>Annul le clash</button>
                  <button className="send" onClick={handlePost}>Envoie ton clash</button>
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