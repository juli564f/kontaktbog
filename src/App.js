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

//opret kontakt import
//import "./components/Opretkontakt";
//import "./components/opretkontakt.css";

//Liste import
import Liste from "./components/Liste";
import "./components/liste.css";


function App () {


    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <div className="bigFlex">
            <Sidebar/>
            <main>
                <Alphabet/>
                <Liste/>
                </main>
            </div>

        </div>

    )
}


export default App;