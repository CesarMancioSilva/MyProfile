import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
function App() {


  return (
    <div className='font-body'>
      
        <BrowserRouter>
          <Navbar/>
          <div className='content px-[6%] 2xl:px-[10%]  relative pb-12'>
            <Routes>
              <Route index element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/resume' element={<Resume/>}/>
            </Routes>
          </div>
        </BrowserRouter>

      </div>
  )
}

export default App
