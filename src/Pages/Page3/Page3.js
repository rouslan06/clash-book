import Menu from "../../Component/Menu/Menu";
import {useState} from  'react';
// import ReactDom from 'react-dom/client';
import "./Page3.css";


function Page3() {
  const [title, setTitle] = useState("")

  /* a travailler l'envoie de la creation page 3 */


  // requetePost () {
  //   axios.post(/*Paramètre de la requête POST*/)
  //     .then(() => this.setState({ redirection: true }));
  // }


  // render () {
  //   const { redirection } = this.state;
  //   if (redirection) {
  //    //Affichage de la redirection
  //    return <Redirect to='/mon-url'/>;
  // }

  return (
    <div>
      <Menu />
      <div id="Page3">
        <h1>Create a new post</h1>
        
        <form id="postStyle">
          <label>Enter your Title :
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <button type="button" className="buttonPreview">PREVIEW</button>

              <textarea> </textarea>
            <button type="button" className="buttonSubmit">SUBMIT</button>
        </form>
   
      </div>
    </div>
  );
}

export default Page3;
