
import ListEntry from "./ListEntry";

function List() {
    const  anamals =["dag","cat","maus"]
    const animalsss=anamals.map(anamls=> <ListEntry nickname={anamls} />)

    const  obj =[
        {name: "dag2" ,age:55,color:"blue"},
        {name: "cat2",age:55,color:"red"},
        {name: "maus2",age:55,color:"blue"}
    ]
    const dag=obj.map(obj2=> <ListEntry nickname={obj2.name} age={obj2.age} color={obj2.color}/>)
    return (
        <div>
            <h1>My list</h1>
            <div style={{display: "flex", flexDirection: "row"}}>
                <ListEntry nickname={"saad"}/>
                <ListEntry nickname={"ahmad"}/>
                <ListEntry nickname={"adnan"}/>

            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <ListEntry nickname={"saad"}/>
                <ListEntry nickname={"ahmad"}/>
                <ListEntry nickname={"adnan"}/>
                <ListEntry/>
                <ListEntry/>
                <ListEntry/>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                {animalsss}
                {/*const animalsss=anamals.map(anamls=> <ListEntry nickname={anamls} />)*/}
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                {dag}

            </div>
        </div>
    )
}

export default List;