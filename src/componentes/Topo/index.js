import React from "react";
import { Link } from "react-router-dom";

import './style.css'

export default function Topo(){
    return(
        <header>
            <div className="topo limita-secao">

                <img src="/assets/logo.png"/>

                <nav >
                    <Link className="link-navegacao" to='/'>Home</Link>
                    <Link className="link-navegacao" to='/sabores'>Sabores</Link>
                    <Link className="link-navegacao" to='/sobre'>Sobre</Link>
                </nav>

            </div>
        </header>
    )
}