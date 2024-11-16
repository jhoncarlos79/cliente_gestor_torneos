import Nav from "react-bootstrap/Nav";

export function Navigation() {
  return (
    <Nav variant="pills" defaultActiveKey="/" className="justify-content-center pt-4 pb-3">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-0" href="/torneos">Torneos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" href="/deportes">Deportes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" href="/equipos">Equipos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4" href="/jugadores">Jugadores</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-5" href="/partidos">Encuentros</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-6" href="/inscripciones">Inscripciones</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-7" href="/logout">Cerrar sesión</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
