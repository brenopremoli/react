function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + " ✔"}
            </del>
        );
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>Messi é o Melhor do Mundo?</h1>
            <ul> 
                <Item 
                    isPacked={true}
                    name="CR7 é melhor."
                />
                <Item 
                    isPacked={true}
                    name="Sim!"
                />
                <Item 
                    isPacked={false}
                    name="Com toda certeza."
                />
            </ul>
        </section>
    );
}
