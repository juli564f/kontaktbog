import "./App.css";
import React from 'react';

//Sidebar import
import "./components/sidebar.css";
import Sidebar from "./components/Sidebar";

//Import Header 
import "./components/header.css"
import Header from "./components/Header"

//import Alphabet linje
import "./components/alphabet.css"
import Alphabet from "./components/Alphabet";
import { useState } from "react"

//opret kontakt import
//import "./components/Opretkontakt";
//import "./components/opretkontakt.css";

//Liste import
import Liste from "./components/Liste";
import "./components/liste.css";
import Opretkontakt from "./components/Opretkontakt";


function App () {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <div className="bigFlex">
            <Sidebar setIsOpen={setIsOpen}/>
            <main>
                <Alphabet/>
                <Liste/>
                </main>
            </div>
            <Opretkontakt setIsOpen={setIsOpen} isOpen={isOpen}/>

        </div>

    )
}

export default App;