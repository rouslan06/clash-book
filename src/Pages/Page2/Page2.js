import Menu from "../../Component/Menu/Menu";
import "./Page2.css";
import Register from "../../Component/Register/Register";


function Page2() {

  return (
    <div className="page2">
      <Menu />
      <div id="Page2">
        <span id="inscrisTitle">INSCRIS TOI</span>
        
        <Register />
      </div>
    </div>
  );
}

export default Page2;
