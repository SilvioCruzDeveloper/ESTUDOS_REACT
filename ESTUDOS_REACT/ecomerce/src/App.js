import logo from "./logo.svg";
import "./App.css";
import { ConponeteNome } from "./componentes/ComponeteNome";
import { ComponeteResumoSobreVoce } from "./componentes/ComponeteResumoSobreVoce";
function App() {
  return (
    <div claseName="App">
      <p>Componentes</p>
      <ConponeteNome />
      <ComponeteResumoSobreVoce>
        Moro Em Curitiba eu acho
      </ComponeteResumoSobreVoce>
    </div>
  );
}

export default App;
