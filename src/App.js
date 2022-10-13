import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import Page1 from "./Pages/Page1/Page1";
import Page2 from "./Pages/Page2/Page2";
import Page3 from "./Pages/Page3/Page3";
import Page4 from "./Pages/Page4/Page4";
import Footer from "./components/Footer/Footer";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
    error: <Error404 />
  },
  {
    path: "/page2",
    element: <Page2 />,
    error: <Error404 />
  },
  {
    path: "/page3",
    element: <Page3 />,
    error: <Error404 />
  },
  {
    path: "/page4",
    element: <Page4 />,
    error: <Error404 />
  }
]);

function App() {
  return  (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />  
    </div>
  )
}

export default App;
