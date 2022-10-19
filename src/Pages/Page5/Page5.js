import Menu from "../../Component/Menu/Menu";
import "./Page5.css";
import Profil from "../../Component/Profil/Profil";

function Page5(){
    return (
        <div className="page5">
            <Menu />
            <div id="page5">

                <span id="profilTitle">TON PROFIL</span>

                <Profil />
            </div>
        </div>
    )
}

export default Page5;