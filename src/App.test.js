import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


/*
async function getArticles(){

  // Fonction afficher les posts

  const optionsID = {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
      }
  }

  let postID = JSON.parse(localStorage.getItem("ID"));

  const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/clash-book/user/${postID}`, optionsID);
  
  const dataID = await response.json();
  const contenuPost = dataID.message;
  
  console.log("contenu du post : ", contenuPost);

  setArticles(articles);
}
*/