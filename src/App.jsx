import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { useState } from "react"

function App() {

  const [openValue, setOpenValue] = useState(false)

  return (
    <>
    <Header openValue={openValue} setOpenValue={setOpenValue}/>
    <Outlet context={{openValue}}/>
    <Footer openValue={openValue}/>
    </>
  )
}

export default App
