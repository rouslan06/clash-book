import Menu from "../../Component/Menu/Menu";
import "./Page4.css";
import { useEffect, useState } from "react";


// Creation de la fonction Page4

function Page4() {

  // La variable d'état qui contient la liste des articles
  const [articles, setArticles] = useState([]);

  // La variable d'état qui contient la liste ("")
  const [userPage4, setUserPage4] = useState("");

  // Création de la fonction asynchrone pour récuperer les articles
  async function getArticles() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      
    };
    let response = await fetch (
      "https://social-network-api.osc-fr1.scalingo.io/clash-book-1/posts", options)

    

    let data = await response.json ();
    console.log(data);

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
    <div className="page4">
      <Menu />
      <div id="Page4">
        <h1>Page de Ibrahima</h1>
        <ul id="entete">
          <p> Liste des articles :</p>
        </ul>

        <ul id="lesarticles">

          <li className="articles">
            <h3>Communiquer</h3>
            <p>Les réseaux sociaux sont des outils de promotion pour les entreprises commerciales et les fournisseurs de service.
              Ils sont aussi des vecteurs de changement, de mobilisation</p>
          </li>


          <li className="articles">
            <h3>Désinformation</h3>

            <p>Les réseaux sociaux sont une source d’information faramineuse. Toutefois, la désinformation s’y trouve tout autant. Il est de plus en plus difficile de départager ce qui est vrai de ce qui est faux. De plus, les algorithmes utilisés par les réseaux sociaux présentent souvent une seule facette de l’information, celle qui nous conforte dans nos positions.
              Pour cette raison, les utilisateurs des réseaux sociaux devraient prendre le temps de s’informer à partir des médias extérieurs qui constituent des sources fiables d’informations.</p>
          </li>

          <li className="articles">
            <h3> Vie professionnelle et privée</h3>

            <p>La barrière entre la vie professionnelle et privée s’amenuise avec les réseaux sociaux.
              Plus les gens s’y affichent, plus les personnes de leur entourage peuvent tout savoir sur eux.
              Parmi cet entourage, il y a peut-être un futur employeur, ou encore quelqu’un qui cible ses victimes pour commettre un vol.
              Il ne faut jamais oublier que ce que l’on met sur le web devient public, malgré les paramètres de confidentialité, malgré les images qui, en principe, disparaissent après quelques minutes.
              Avec les réseaux sociaux, il n’y a plus aucune barrière entre la vie professionnelle et la vie privée.
              Il faut donc impérativement se questionner par rapport à ce qu’on alimente de notre « vie virtuelle. »</p>
          </li>

          <li className="articles">
            <h3>Briser la solitude?</h3>

            <p>Mal du siècle, la solitude mine le bien-être de nombreuses personnes.
              Or, les réseaux sociaux comblent une partie de ce vide relationnel,
              mais en même temps, lorsqu’on en abuse, ils peuvent l’accentuer..</p>

          </li>
          <li className="articles">
            <h3> Baisse d'estime de soi</h3>
            <p> On remarque, de plus en plus, une baisse de l’estime de soi chez les utilisateurs assidus des réseaux sociaux, en particulier chez les adolescentes.
              En se comparant toujours à des images parfaites, à des gens qui semblent vivre continuellement des choses extraordinaires,
              il semble de plus en plus difficile pour les jeunes de se forger leur propre estime personnelle.</p>
          </li>
          <li className="articles">
            <h3>Les inconvénients des réseaux sociaux</h3>
            <p>Mais s’ils apportent de nombreux avantages,
              les réseaux sociaux, comme Internet, sont capables du meilleur comme du pire.</p>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Page4;
