import { useState, useEffect } from "react";
import "./Profil.css";

function Profil() {
    const [user, setUser] = useState({ firstname: "", lastname: "", email: "" });

    async function getInfo() {
        let token = JSON.parse(localStorage.getItem("token"));

        const optionsInfo = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            }
        }

        const responseInfo = await fetch("https://social-network-api.osc-fr1.scalingo.io/clash-book/user", optionsInfo);

        const dataInfo = await responseInfo.json();

        const firstname = dataInfo.firstname;
        const lastname = dataInfo.lastname;
        const email = dataInfo.email;

        setUser({ firstname: firstname, lastname: lastname, email: email })
        console.log(dataInfo);
    }

    useEffect(() => { getInfo() }, []);

    function infoChange(e) {
        e.preventDefault();
    }

    return (
        <div>
            <div className="info">
                <label htmlFor="firstname" id="infoProfilTitle">Prénom :</label>
                <input id="inputProfil"
                    name="firstname"
                    value={user.firstname}
                    onChange={infoChange}
                />

                <label htmlFor="lastname" id="infoProfilTitle">Nom : </label>
                <input id="inputProfil"
                    name="lastname"
                    value={user.lastname}
                    onChange={infoChange}
                />

                <label htmlFor="email" id="infoProfilTitle">Email :</label>
                <input id="inputProfil"
                    name="email"
                    value={user.email}
                    onChange={infoChange}
                />

            </div>
                <button id="profilModifButton">Modifier</button>
        </div>
    )
}

export default Profil;