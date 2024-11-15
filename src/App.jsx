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
import { Toaster } from "react-hot-toast"

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
        <Route path="/deportes" element={<ProtectedRoute><DeportePagina/></ProtectedRoute>}></Route>
        <Route path="/deportes-add" element={<ProtectedRoute><DeporteForm/></ProtectedRoute>}></Route>
        <Route path="/deportes-add/:id" element={<ProtectedRoute><DeporteForm/></ProtectedRoute>}></Route>
        <Route path="/torneos" element={<ProtectedRoute><TorneoPagina/></ProtectedRoute>}></Route>
        <Route path="/torneos-add" element={<ProtectedRoute><TorneoForm/></ProtectedRoute>}></Route>
        <Route path="/torneos-add/:id" element={<ProtectedRoute><TorneoForm/></ProtectedRoute>}></Route>
        <Route path="/equipos" element={<ProtectedRoute><EquipoPagina/></ProtectedRoute>}></Route>
        <Route path="/equipos-add" element={<ProtectedRoute><EquipoForm/></ProtectedRoute>}></Route>
        <Route path="/equipos-add/:id" element={<ProtectedRoute><EquipoForm/></ProtectedRoute>}></Route>
        <Route path="/inscripciones" element={<ProtectedRoute><InscripcionePagina/></ProtectedRoute>}></Route>
        <Route path="/inscripciones-add" element={<ProtectedRoute><InscripcioneForm/></ProtectedRoute>}></Route>
        <Route path="/inscripciones-add/:id" element={<ProtectedRoute><InscripcioneForm/></ProtectedRoute>}></Route>
        <Route path="/jugadores" element={<ProtectedRoute><JugadorePagina/></ProtectedRoute>}></Route>
        <Route path="/jugadores-add" element={<ProtectedRoute><JugadoreForm/></ProtectedRoute>}></Route>
        <Route path="/jugadores-add/:id" element={<ProtectedRoute><JugadoreForm/></ProtectedRoute>}></Route>
        <Route path="/partidos" element={<ProtectedRoute><PartidoPagina/></ProtectedRoute>}></Route>
        <Route path="/partidos-add" element={<ProtectedRoute><PartidoForm/></ProtectedRoute>}></Route>
        <Route path="/partidos-add/:id" element={<ProtectedRoute><PartidoForm/></ProtectedRoute>}></Route>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App
