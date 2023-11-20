import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import FullPage from './components/FullPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/full-page' element={<FullPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
