import React from 'react';
import { Provider } from 'react-redux';

import store from "../src/Store";

import Routes from "./routes";
import NavBar from "./page/navbar"


import "./App.css";
import { BrowserRouter } from "react-router-dom";



function App() {
    return (
        <>
<Provider store={store}>
            <BrowserRouter>
                <NavBar />
                <Routes />
            </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;