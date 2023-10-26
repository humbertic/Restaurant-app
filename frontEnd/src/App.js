
import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"


export default function App () {
  const [darkMode,setDarkMode] = React.useState(false)
  function toggleDarkMode(){
    setDarkMode(prevState => !prevState)
  }
 
  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main  darkMode={darkMode}/>
    </div >
  )
}