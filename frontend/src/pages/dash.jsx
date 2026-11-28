import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import API from "../components/api"

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

    const checkendpoint = async()=>{
        const response = await API.get("/api/get");
        console.log(response.data);
    }
    
    return(
        <>  
            {/*<button onClick={display} className="self-center bg-gray-600 text-white rounded-sm px-2 py-1 hover:bg-gray-800 border border-slate-400">Submit</button>*/}
            <div>{userdata.email}</div>
            <div>{userdata.pass}</div>
            <button onClick={checkendpoint} className="bg-slate-500 rounded-2xl m-2">BUTTON</button>
        </>
    )
}

export default Dash