// function ListEntry(props){
// const n=props.nickname
    import {useState} from "react";

function ListEntry({age,nickname,color}) {

    //     const  state=useState()
    // const value =state[0]
    // const setter =state[1]
    // const [value,setvalue]=useState()
    const [isVaccinated,setIsVaccinated]=useState(false)

        const kommer = age === undefined ? null : <span style={{color: "lightblue"}}>({age})</span>
    const kommer2=color ===undefined ?  "pink":color

        return (


            <div style={
                {
                    flex: 1,
                    borderWidth: 9,
                    borderStyle: 'solid',
                    borderColor: kommer2,
                    margin: 5
                }
            }>
                <h2>{nickname}
                    {kommer}
                </h2>
                {/*<h2>this ist a entry ...{n}</h2>*/}

                <div style={

                    {
                        color:
                            isVaccinated ? "greenyellow" : "red"
                    }}>
                    {isVaccinated ? "geimpft" : "ungeimpft"}
                </div>
                <button onClick={
                    () => {
                        // const statu = !isVaccinated
                        //     setIsVaccinated(statu)
                        setIsVaccinated((!isVaccinated))

                    }

                }>{

                    isVaccinated ? "impfung" : "unimpfung"
                }

                </button>





            </div>

        )

}

export default ListEntry;