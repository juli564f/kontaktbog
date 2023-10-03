import "./App.css";
import React from 'react';

//Sidebar import
import "./components/sidebar.css";
import Sidebar from "./components/Sidebar";

//Import Header 
import "./components/header.css";
import Header from "./components/Header";

//importere useState funktion fra react bibliotek
import { useState } from "react";

//impoterer constructor
import {Contact} from "./entities/contact"

//Liste import
import Liste from "./components/Liste";
import "./components/liste.css";
import Opretkontakt from "./components/Opretkontakt";


function App () {

//Dummy data til oprettede kontakter
    const contactsDummyData = [
        new Contact ('Asta', 'Carl', 'astamig@hotmail.com', '42438619', 'None', 'Student'), 
        new Contact ('Julie', 'Lauesen', 'julie@lauesen.dk', '12345678', 'Rungsted golfklub', 'Servicemedarbejder' )
    ];
//deklarerer state variabler og opretter funktion setContacts som kan bruges til at ændre state ved at bruge contactsDummyData
    const [contacts, setContacts] = useState(contactsDummyData)
//setIOpen med start værdi på false.
    const [isOpen, setIsOpen] = useState(false);

    

    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <div className="bigFlex">
            <Sidebar setIsOpen={setIsOpen}/>
                <main>
                    <div className="listPosition">   
                        {contacts.map((contactObj) => (
                            <Liste 
                            //sender props videre
                                key={contactObj.firstname} 
                                firstname={contactObj.firstname} 
                                lastname={contactObj.lastname} 
                                email={contactObj.email} 
                                phone={contactObj.email} 
                                company={contactObj.company} 
                                position={contactObj.position} />
                            ))};
                    </div>
                </main>
            </div>
            <Opretkontakt 
            //sender props videre
            setIsOpen={setIsOpen} 
            isOpen={isOpen} 
            setContacts={setContacts} 
            contacts={contacts}/>

        </div>

    )
}

export default App;