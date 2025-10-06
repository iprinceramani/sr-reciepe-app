import './App.css'
import { Route, Routes } from 'react-router'
import Cuisines from './components/Cuisines'
import '@tailwindplus/elements';
import Navbar from './components/Navbar'
import Receipies from './components/Receipies'
import FullReceipe from './components/FullReceipie'
import Meals from './components/Meals'
function App() {
 
  return (
    <>
    <Navbar></Navbar>
    <Routes>
        <Route path='/' element={<Cuisines></Cuisines>}></Route>
      <Route path='/Cuisines' element={<Cuisines></Cuisines>}></Route>
      <Route path="/Receipies/:cuisine" element={<Receipies></Receipies>}></Route>
      <Route path="/Receipies" element={<Receipies></Receipies>}></Route>
      <Route path='/Fullreceipe/:id' element={<FullReceipe></FullReceipe>}></Route>
      <Route path='/Meals/:meal' element={<Meals></Meals>}></Route>
    </Routes>
    </>
  )
}

export default App