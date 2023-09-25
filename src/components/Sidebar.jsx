import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Sidebar(props) {
    return (
        <div>
            <nav className="nav flex-column">
                <a className="nav-link" aria-current="page" href="#">Contacts</a>
                <a className="nav-link" href="#">All contacts</a>
                <a className="nav-link" href="#">Colleagues</a>
                <button>Create contact</button>
            </nav>
        </div>
        
    )

}

