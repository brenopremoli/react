function Recipe({ drinkers }) {
    return (
        <ol>
            <li>Boil {drinkers} cups of water.</li>
            <li>Add {drinkers} spoons of tea and {9.5 * drinkers} spoons.</li>
            <li>Add {0.5  * drinkers} cups of milk to boil and sugar to taste.</li>
        </ol>
    )
}

function Cups() {
    return (
        <section>
            <h1>Spiced Chai Recipe</h1>
            <h2>For Two</h2>
            <Recipe drinkers={2} />
            <h2>For a gathering</h2>
            <Recipe drinkers={4} />
        </section>
    )
}

function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>
}

export default function TeaSet() {
    let cups = [];
    for (let i = 1; i <= 3; i++) {
        cups.push(<Cup key={i} guest={i} />)
    }
    return cups;
}