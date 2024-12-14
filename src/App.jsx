import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignUp'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="signin" element={<SignIn/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="projects" element={<Projects/>}/>

    </Routes>
    
    
    </BrowserRouter>



  )
}
