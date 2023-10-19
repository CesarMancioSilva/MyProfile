import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
function App() {


  return (
    <div className='border'>
      
        <BrowserRouter>
          <Navbar/>
          <div className='content px-[6%] h-[calc(100vh-88px)] relative'>
            <Routes>
              <Route index element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
            </Routes>
          </div>
        </BrowserRouter>

      </div>
  )
}

export default App
