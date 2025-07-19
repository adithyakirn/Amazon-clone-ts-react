
import "./index.css"
import { Route, Routes } from "react-router"
import Home from "./Pages/Home"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
