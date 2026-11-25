import { useState } from 'react'
import chennaiimg from '../assets/Chennai_Central.jpg'
function Login(){
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const formsubmit = (e)=>{
    e.preventDefault();
    console.log(email,pass)
    }
    return (
    <>
    <div className='text-blue-700 text-7xl font-serif text-center uppercase'>Vanakam</div>
    <div className='text-yellow-500 text-5xl font-medium text-center uppercase'>Chennai</div>
    <div className='flex flex-col items-center justify-center'>
    <img src={chennaiimg} alt='Chennai' className='w-auto h-auto'/>
    </div><br></br>

    <form onSubmit={(e)=>formsubmit(e)}className='ml-10 mb-1.5'>
      <label className="text-sm font-medium text-slate-900 mb-1">Enter Email:  </label>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
      <label className="text-sm font-medium text-slate-900 mb-1">Enter Password:  </label>
      <input type="password" value={pass}onChange={(e)=>setPass(e.target.value)}></input><br></br>
      <button className='bg-gray-600 text-white rounded-sm px-1 hover:bg-gray-800 border border-slate-400'>Submit</button>
    </form>
    </>
  )
}
export default Login