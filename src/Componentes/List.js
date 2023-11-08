import { people } from "./Data";
import { getImageUrl } from "./Utils";

export default function List() {
    const players = people.filter(person => person.profession === 'jogador de futebol');
    const listItems = players.map(person => 
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                know for {person.accomplishment}
            </p>
        </li>
        );
    return <ul>{listItems}</ul>
}