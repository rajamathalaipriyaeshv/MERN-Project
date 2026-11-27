import './login.css'
import { useState } from 'react'
import chennaiimg from '../assets/Chennai_Central.jpg'
import {useNavigate} from 'react-router-dom'
function Login(){
  const[formdata,setFormdata]=useState({
    email:"",
    pass:""
  })
  
  const navigate = useNavigate()

  const formsubmit = (e)=>{
    e.preventDefault();
    console.log(formdata)
    alert("login Successful")
    navigate("/dash",{state:formdata})
  }

  function handleChanges(e){
    setFormdata({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }

  return (
    <>
    <div className='text-blue-700 text-7xl font-serif text-center uppercase mt-2'>Vanakam</div>
    <div className='text-yellow-500 text-5xl font-medium text-center uppercase'>Chennai</div><br></br>
    <div className='flex flex-col items-center justify-center'>
    <img src={chennaiimg} alt='Chennai' className='mt-5 w-auto h-auto border-2 border-gray-300 rounded-2xl shadow-2xl'/>
    </div>

    <form onSubmit={(e) => formsubmit(e)} className="w-fit mx-auto mt-15 p-6 flex flex-col items-end gap-5 bg-slate-50 rounded shadow border-2 border-gray-100">
    <div className="flex items-center gap-2">
    <label className="text-sm font-medium text-slate-900">Enter Email:</label>
    <input type="email" name="email" onChange={handleChanges} className="border border-slate-300 rounded px-2 py-1"/>
    </div>

    <div className="flex items-center gap-2">
    <label className="text-sm font-medium text-slate-900">Enter Password:</label>
    <input type="password" name="pass" onChange={handleChanges} className="border border-slate-300 rounded px-2 py-1"/>
    </div>

    <button className="self-center bg-gray-600 text-white rounded-sm px-2 py-1 hover:bg-gray-800 border border-slate-400">Submit</button>
    </form>
    <br />
    <br />
    </>
  )
}
export default Login