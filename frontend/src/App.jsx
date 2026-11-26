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
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/task" element={<Task/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/clint" element={<Clint/>}/>
        <Route path="/dash" element={<Dash/>}/>
        <Route path="/calender" element={<Calender/>}/>
        <Route path="/set" element={<Set/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
