import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "../src/contex/Contex.jsx";
import Navbar from "../src/components/navbar/navbar.jsx"
import Home from "./views/home/home.jsx"

function App() {

  const [servicio, setServicio] = useState([]);
  const sharedState = { servicio, setServicio};

  const consultarJson = async () => {

    const endpoint = "servicios"
    const url = `https://proyecto-final-back-production-045b.up.railway.app/${endpoint}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setServicio(data)

  }

  useEffect(() => {

    consultarJson()

  }, [])

  return (
    <div className="App">
      <Context.Provider value={sharedState}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/"  element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
