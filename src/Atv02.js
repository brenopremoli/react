import { Link } from "react-router-dom";
import Contador from './Componentes/Contador';

function Atv02() {
    return (
        <>
            <h1>Semana 02</h1>
            <hr></hr>
            <h2>Atividade 01</h2>
            <Contador />
            <hr></hr>
            <Link to="/">Voltar</Link>
        </>
    );
}

export default Atv02;