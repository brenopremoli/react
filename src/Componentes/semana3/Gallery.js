export function Profile() {
    return (
        <img 
        src="https://efootballhub.net/pes21-mobile/images/players/137010_l.png" alt="Lionel Messi"
        />
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing Soccer Player</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}
