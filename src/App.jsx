import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Importamos las paginas

import { DeportePagina } from "./pages/deportePagina"
import { DeporteForm } from "./pages/deporteForm"
import { TorneoPagina } from "./pages/torneoPagina"
import { TorneoForm } from "./pages/torneoForm"
import { EquipoPagina } from "./pages/equipoPagina"
import { EquipoForm } from "./pages/equipoForm"
import { InscripcionePagina } from "./pages/inscripcionePagina"
import { InscripcioneForm } from "./pages/inscripcioneForm"
import { JugadorePagina } from "./pages/jugadorePagina"
import { JugadoreForm } from "./pages/jugadoreForm"
import { PartidoPagina } from "./pages/partidoPagina"
import { PartidoForm } from "./pages/partidoForm"
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
        <Route path="/inscripciones" element={<InscripcionePagina/>}></Route>
        <Route path="/inscripciones-add" element={<InscripcioneForm/>}></Route>
        <Route path="/jugadores" element={<JugadorePagina/>}></Route>
        <Route path="/jugadores-add" element={<JugadoreForm/>}></Route>
        <Route path="/partidos" element={<PartidoPagina/>}></Route>
        <Route path="/partidos-add" element={<PartidoForm/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
