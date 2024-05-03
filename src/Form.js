import {useState} from "react";

function Form(){
    const [usernamne,serUsername]=useState("nati");
    const [age,setAge]=useState(18);
    const [magiknummer,setMagiknummer]=useState(0)
    return <div>
        <h2>some</h2>
        <div>
            <label for={"usernamne"}>Username</label>
            <input id={"usernamne"}   type={"text"}  value={usernamne}   onChange={
                (e)=>serUsername(e.target.value)
            }
            />
            <input type={"nummer"} value={age} onChange={e=>{
                setAge(e.target.value)
            }
            }/>
            <h2>sschreibenm {usernamne},age ist{age}</h2>
            <div>
                <button onClick={() => {
                    let nemrnr = magiknummer
                    setMagiknummer(++nemrnr)
                }}>inter({magiknummer})
                </button>
                <h3>here {magiknummer}</h3>
            </div>
        </div>
    </div>


}

export default Form;