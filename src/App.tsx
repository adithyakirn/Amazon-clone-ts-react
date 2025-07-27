
import "./index.css"
import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Prime from "./Pages/Prime"
import Pay from "./Pages/Pay"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/prime" element={<Prime/>}/>
        <Route path="/pay" element={<Pay/>}/>
      </Routes>
    </>
  )
}

export default App
