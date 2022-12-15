import React from "react"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/nosotros">Nosotros</Link>
            <br />
            <br />
            <Link to="/contactos">
            <button>click aqui</button></Link>
        </div>
    )
}

export default Navbar