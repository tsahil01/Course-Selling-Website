import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './component/Homepage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/' element = {<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}