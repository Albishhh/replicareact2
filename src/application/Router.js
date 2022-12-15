import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Nosotros from "../pages/Nosotros.js"
import Contactos from "../pages/Contactos.js"
import App from "../App.js"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element=(<App/>)></Route>
                <Route path="/contactos" element=(<Contactos/>)></Route>
                <Route path="/nosotros" element=(<Nosotros/>)></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router