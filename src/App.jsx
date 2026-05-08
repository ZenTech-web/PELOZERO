import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { useState, useRef } from "react"

function App() {

  const [openValue, setOpenValue] = useState(false)

  const refServicos = useRef(null)
  const refPrecos   = useRef(null)
  const refSobre    = useRef(null)
  const refContato  = useRef(null)

  function scrollTo(ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
    <Header
      openValue={openValue}
      setOpenValue={setOpenValue}
      scrollS={() => scrollTo(refServicos)}
      scrollP={() => scrollTo(refPrecos)}
      scrollO={() => scrollTo(refSobre)}
      scrollC={() => scrollTo(refContato)}
    />
    <Outlet context={{ openValue, refServicos, refPrecos, refSobre, refContato }}/>
    <Footer openValue={openValue}/>
    </>
  )
}

export default App
