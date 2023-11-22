import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Semana 01</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Semana 02</Link>
                    </li>
                    <li>
                        <Link to="/Atv03">Semana 03</Link>
                    </li>
                    <li>
                        <Link to="/Atv04">Semana 04</Link>
                    </li>
                    <li>
                        <Link to="/Atv05">Semana 05</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;