const person = {
    name: 'Lionel Messi',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src="https://efootballhub.net/pes21-mobile/images/players/137010_l.png"
                alt="Lionel Messi"
            />
            <ul>
                <li>Improve the Football</li>
                <li>Prepare Soccer  Stars</li>
                <li>Work on FC Barcelona</li>
            </ul>
        </div>
    );
}

