
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Dashboard from './Pages/Dashboard'
import Auth from './Pages/Auth'
import PageNotFound from './Pages/PageNotFound'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register={true} /> } />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
