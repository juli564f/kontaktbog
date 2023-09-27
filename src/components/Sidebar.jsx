import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MyBtn from "./MyBtn";
import { useState } from "react"


export default function Sidebar({setIsOpen}) {

    function handleOpenModal() {
        setIsOpen(true);
        console.log("hej")
    };

    return (
        <div>
            <nav className="nav flex-column">
                <a className="nav-link" aria-current="page" href="#">Contacts</a>
                <a className="nav-link" href="#">All contacts</a>
                <a className="nav-link" href="#">Colleagues</a>
                <MyBtn buttonText={"Opret kontakt"} onClick={handleOpenModal}/>
            </nav>
        </div>
        
    )

}

