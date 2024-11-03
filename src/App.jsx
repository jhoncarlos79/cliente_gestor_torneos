import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Importamos las paginas

import { DeportePagina } from "./pages/deportePagina"
import { DeporteForm } from "./pages/deporteForm"
import { TorneoPagina } from "./pages/torneoPagina"
import { TorneoForm } from "./pages/torneoForm"
import { EquipoPagina } from "./pages/equipoPagina"
import { EquipoForm } from "./pages/equipoForm"
import 'bootstrap/dist/css/bootstrap.min.css';
// Importamos componentes

import { Navigation } from "./components/navigation"

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to="/deportes"/>}></Route>
        <Route path="/deportes" element={<DeportePagina/>}></Route>
        <Route path="/deportes-add" element={<DeporteForm/>}></Route>
        <Route path="/torneos" element={<TorneoPagina/>}></Route>
        <Route path="/torneos-add" element={<TorneoForm/>}></Route>
        <Route path="/equipos" element={<EquipoPagina/>}></Route>
        <Route path="/equipos-add" element={<EquipoForm/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
