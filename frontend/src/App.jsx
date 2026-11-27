import './App.css'
import {BrowserRouter, Routes, Route, RouterProvider} from 'react-router-dom'
import Login from './pages/login'
import Project from './pages/project'
import Task from './pages/task'
import Team from './pages/team'
import Clint from './pages/clint'
import Dash from './pages/dash'
import Calender from './pages/calender'
import Set from './pages/set'
import Register from './pages/register'
import Admin from './pages/admin/adminlayout'
import Admindash from './pages/admin/dash'
import Userdetails from './pages/admin/userdetails'
import Setting from './pages/admin/setting'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/task" element={<Task/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/clint" element={<Clint/>}/>
        <Route path="/dash" element={<Dash/>}/>
        <Route path="/calender" element={<Calender/>}/>
        <Route path="/set" element={<Set/>}/>
        <Route path="/admin" element={<Admin/>}>
          <Route path="dash" element={<Admindash/>}/>
          <Route path="userdetails" element={<Userdetails/>}/>
          <Route path="setting" element={<Setting/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
