import React from 'react';

import Routes from "./routes";
import NavBar from "./page/navbar"


import "./App.css";
import { BrowserRouter } from "react-router-dom";



function App() {
    return (
        <>

            <BrowserRouter>
                <NavBar />
                <Routes />
            </BrowserRouter>
        </>
    );
}

export default App;