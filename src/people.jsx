import { people } from "./data1";
import { getImageUrl } from "./utils1";

export default function People(){
    const chemists = people.filter(person => person.profession === "chemist");
    const chemistItems = chemists.map(person =>
        <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
        );
    const everyoneElse = people.filter(person => person.profession !== "chemist");
    const everyoneElseList = everyoneElse.map(person =>
        <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
        );
    
    return (
        <article>
            <h1>Scientists</h1>
            <h2>Chemists</h2>
            <ul>{chemistItems}</ul>
            <h2>EveryoneElse</h2>
            <ul>{everyoneElseList}</ul>
        </article>
    )
}