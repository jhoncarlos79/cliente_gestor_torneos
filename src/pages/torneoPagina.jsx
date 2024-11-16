import { TorneosList } from "../components/torneoList";
import Button from "react-bootstrap/Button";

export function TorneoPagina() {
  return (
    <div>
      <h1>LISTADO TORNEOS</h1>
      <Button href="/torneos-add" variant="success">Nuevo Torneo</Button>
      <TorneosList />
    </div>
  );
}
