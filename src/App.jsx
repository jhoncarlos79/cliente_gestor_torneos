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
// Paginas de autorizacion
import { Login } from "./pages/login"
import { Register } from "./pages/register"
import { Home } from "./pages/home"
import { NoFound } from "./pages/nofound"
import { ProtectedRoute } from "./components/ProtectedRoute"


import 'bootstrap/dist/css/bootstrap.min.css';

// Importamos componentes

import { Navigation } from "./components/navigation"

function Logout(){
  localStorage.clear();
  return <Navigate to="/login"/>
}

function RegisterAndLogout(){
  localStorage.clear();
  return <Register/>
}

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/register" element={<RegisterAndLogout/>}/>
        {/*<Route path="/" element={<Navigate to="/deportes"/>}></Route>*/}
        <Route path="/deportes" element={<DeportePagina/>}></Route>
        <Route path="/deportes-add" element={<DeporteForm/>}></Route>
        <Route path="/deportes-add/:id" element={<DeporteForm/>}></Route>
        <Route path="/torneos" element={<TorneoPagina/>}></Route>
        <Route path="/torneos-add" element={<TorneoForm/>}></Route>
        <Route path="/torneos-add/:id" element={<TorneoForm/>}></Route>
        <Route path="/equipos" element={<EquipoPagina/>}></Route>
        <Route path="/equipos-add" element={<EquipoForm/>}></Route>
        <Route path="/equipos-add/:id" element={<EquipoForm/>}></Route>
        <Route path="/inscripciones" element={<InscripcionePagina/>}></Route>
        <Route path="/inscripciones-add" element={<InscripcioneForm/>}></Route>
        <Route path="/inscripciones-add/:id" element={<InscripcioneForm/>}></Route>
        <Route path="/jugadores" element={<JugadorePagina/>}></Route>
        <Route path="/jugadores-add" element={<JugadoreForm/>}></Route>
        <Route path="/jugadores-add/:id" element={<JugadoreForm/>}></Route>
        <Route path="/partidos" element={<PartidoPagina/>}></Route>
        <Route path="/partidos-add" element={<PartidoForm/>}></Route>
        <Route path="/partidos-add/:id" element={<PartidoForm/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
