import './login.css'
import { useState } from 'react'
import chennaiimg from '../assets/Chennai_Central.jpg'
import {useLocation, useNavigate} from 'react-router-dom'
function Login(){
  const[logindata,setLogindata]=useState({
    email:"",
    pass:""
  })
  
  const navigate = useNavigate()
  const location = useLocation()
  //const[userdata, setUserdata] = useState("")

  function onSubmit(e){
    e.preventDefault();
    const userdata = location.state
    console.log(logindata)
    console.log(userdata)
    if(logindata.email===userdata.email && logindata.pass===userdata.pass){
      alert("login Successful")
      navigate("/dash",{state:logindata})
    }
    else{
      alert("wrong credentials")
    }
  }

  function handleChanges(e){
    setLogindata({
      ...logindata,
      [e.target.name] : e.target.value
    })
  }

  return (
    <>
    <div className='text-blue-700 text-5xl font-serif text-center uppercase mt-2 sticky top-2'>Vanakam</div>
    <div className='text-yellow-500 text-5xl font-medium text-center uppercase'>Chennai</div>
    <div className='w-fit mx-auto mt-2 text-blue-700 font-bold font-sans'>Login</div>
    <hr className="bg-gray-600 w-70 mx-auto mt-2 mb-5"/>

    <div className='flex flex-col items-center justify-center'>
    <img src={chennaiimg} alt='Chennai' className='mt-5  mx-auto w-75 h-auto border-2 border-gray-300 rounded-2xl shadow-black shadow-2xl'/>
    </div>

    <form onSubmit={onSubmit} className="w-fit mx-auto mt-15 p-6 pl-5 pr-5 flex flex-col items-end gap-5 bg-slate-50 rounded shadow-2xl border-2 border-gray-100">
    <div className="flex items-center gap-3">
    <label className="text-sm font-bold text-slate-900">Email:</label>
    <input type="email" name="email" onChange={handleChanges} className="border border-slate-300 w-44 rounded-xl px-2 py-1"/>
    </div>

    <div className="flex items-center gap-3">
    <label className="text-sm font-bold text-slate-900">Password:</label>
    <input type="password" name="pass" onChange={handleChanges} className="border border-slate-300 w-44 rounded-xl px-2 py-1"/>
    </div>

    <button className="self-center bg-gray-600 w-60 text-white rounded-sm px-2 py-1 hover:bg-gray-800 border border-slate-400">Submit</button>
    </form>
    <br />
    <br />
    </>
  )
}
export default Login