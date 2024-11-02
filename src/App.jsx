import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Importamos las paginas

import { DeportePagina } from "./pages/deportePagina"
import { DeporteForm } from "./pages/deporteForm"
import { TorneoPagina } from "./pages/torneoPagina"
import { TorneoForm } from "./pages/torneoForm"

// Importamos componentes

import { Navigation } from "./components/navigation"

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        {/*<Route path="/" element={<Navigate to="/deportes"/>}>*/}
        <Route path="/deportes" element={<DeportePagina/>}></Route>
        <Route path="/deportes-add" element={<DeporteForm/>}></Route>
        <Route path="/torneos" element={<TorneoPagina/>}></Route>
        <Route path="/torneos-add" element={<TorneoForm/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
