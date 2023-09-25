import "./App.css";

import "./components/Opretkontakt";
import "./components/opretkontakt.css";

import "./components/Liste";
import "./components/liste.css";

function App () {
    return (
        <div className="App">
            <div className="bigFlex">
                <sidebar/>
            <main>
                <div className="contentbox">
                    <Opretkontakt/>
                </div>
            </main>
            </div>

        </div>

    )
}