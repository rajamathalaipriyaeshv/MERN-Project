import './App.css'
import Login from './pages/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Project from './pages/project'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/project" element={<Project/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
