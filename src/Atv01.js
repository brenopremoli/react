import { Link } from "react-router-dom";
import Relogio from './Componentes/semana1/Relogio';
import Letreiro from './Componentes/semana1/Letreiro';

function Atv01() {
    return (
        <>
            <h1>Semana 01</h1>
            <hr></hr>
            <h2>Atividade 01</h2>
            <Relogio />
            <hr></hr>
            <h2>Atividade 02</h2>
            <Letreiro />
            <hr></hr>
            <Link to="/">Voltar</Link>
        </>
    )
}

export default Atv01;