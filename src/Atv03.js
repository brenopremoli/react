import { Link } from "react-router-dom";
import App from './Componentes/App.js';
import Todo from './Componentes/Todo.js';
import Profile from './Componentes/Props.js';
import PackingList from "./Componentes/PackingList.js";

function Atv03() {
    return (
        <>
            <h1>Semana 03</h1>
            <hr></hr>
            <h2>Atividades</h2>
            <hr></hr>
            <App />
            <hr></hr>
            <Todo />
            <hr></hr>
            <Profile />
            <hr></hr>
            <hr></hr>
            <Link to="/">Voltar</Link>
        </>
    );
}

export default Atv03;