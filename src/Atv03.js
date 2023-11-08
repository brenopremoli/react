import { Link } from "react-router-dom";
import App from './Componentes/semana3/App.js';
import Todo from './Componentes/semana3/Todo.js';
import Profile from './Componentes/semana3/Props.js';
import PackingList from "./Componentes/semana3/PackingList.js";
import List from "./Componentes/semana3/List.js";
import TeaSet from "./Componentes/semana3/Guest.js";

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
            <PackingList />
            <hr></hr>
            <List />
            <hr></hr>
            <TeaSet />
            <hr></hr>
            <Link to="/">Voltar</Link>
        </>
    );
}

export default Atv03;