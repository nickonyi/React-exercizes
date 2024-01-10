function Item({isPacked,name}){
   
    return <li className="item">{isPacked?name+' ✔':name}</li>
}

export default function PackingList(){
    return (
        <section>
        <h1>Sally's Ride packig list</h1>
        <ul>
            <Item isPacked={true} name="Space suit"/>
            <Item isPacked={false} name="Helmet with a golden leaf"/>
            <Item isPacked={true} name="A photo of ham"/>
        </ul>
        </section>
    )
}