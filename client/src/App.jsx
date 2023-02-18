import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from "./components/navbar"

import Home from './pages/home'
import SpecificProduct from './pages/specificProduct'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:categoryId/:typeId/:productId" element={<SpecificProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
