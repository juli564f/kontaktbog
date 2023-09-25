import "./App.css";

//Sidebar import
import "./components/sidebar.css";
import Sidebar from "./components/Sidebar";

//opret kontakt import
import "./components/Opretkontakt";
import "./components/opretkontakt.css";

//Liste import
import "./components/Liste";
import "./components/liste.css";

function App () {
    return (
        <div className="App">
            <div className="bigFlex">
                <Sidebar/>
            <main>
                <div className="contentbox">
                    <Opretkontakt/>
                </div>
                <div className="liste"></div>
            </main>
            </div>

        </div>

    )
}