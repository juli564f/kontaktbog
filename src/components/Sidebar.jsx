import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MyBtn from "./MyBtn";

//modtager props
export default function Sidebar({ setIsOpen }) {

//Funktion der åbner Modal
    function handleOpenModal() {
        setIsOpen(true);
    };

return (
        <div>
            <nav className="nav flex-column">
                <a className="nav-link" aria-current="page" href="#">Contacts</a>
                <a className="nav-link" href="#">All contacts</a>
                <a className="nav-link" href="#">Colleagues</a>
                <MyBtn buttonText={"Create contact"} onClick={handleOpenModal}/>
            </nav>
        </div>
        );
}

