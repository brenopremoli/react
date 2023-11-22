import { Link } from "react-router-dom";
import Memoria from "./Componentes/semana5/Memoria";

function Atv05() {
    return (
        <>
            <h1>Semana 05</h1>
            <hr></hr>
            <h2>Atividade 1</h2>
            <Memoria />
            <hr></hr>
            <Link to="/">Voltar</Link>
        </>
    );
}

export default Atv05;