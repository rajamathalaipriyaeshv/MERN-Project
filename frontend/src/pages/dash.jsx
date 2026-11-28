import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function Dash(){
    const location = useLocation()
    const[userdata, setUserdata] = useState("")

    //function display(){
    //    setUserdata(location.state)
    //    console.log(userdata)
    //}

    useEffect(()=>{
        setUserdata(location.state)
        console.log(userdata)   
    },)

    return(
        <>  
            {/*<button onClick={display} className="self-center bg-gray-600 text-white rounded-sm px-2 py-1 hover:bg-gray-800 border border-slate-400">Submit</button>*/}
            <div>{userdata.email}</div>
            <div>{userdata.pass}</div>
        </>
    )
}

export default Dash