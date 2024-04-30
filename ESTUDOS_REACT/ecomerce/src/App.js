import logo from "./logo.svg";
import "./App.css";
import { ConponeteNome } from "./componentes/ComponeteNome";
import { ComponeteResumoSobreVoce } from "./componentes/ComponeteResumoSobreVoce";
import { ComponenteCompetencia } from "./componentes/ComponenteCompetencia";
function App() {
  return (
    <div claseName="App">
      <p>Componentes</p>
      <ConponeteNome />
      <ComponeteResumoSobreVoce>
        Moro Em Curitiba eu acho
      </ComponeteResumoSobreVoce>
      <ComponenteCompetencia nome=" HTML" descricao="Fazer componete" />
    </div>
  );
}

export default App;
