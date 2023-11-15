import { Link } from "react-router-dom";
import Calculadora from "./Componentes/semana4/Calculadora";

function Atv04() {
    return (
        <>
            <h1>Semana 04</h1>
            <hr></hr>
            <h2>Atividade 1</h2>
            <hr></hr>
            <Calculadora />
            <hr></hr>
            <Link to="/">Voltar</Link>
        </>
    );
}

export default Atv04;