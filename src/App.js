import Header from "./componentes/Header";
import SessaoPesquisa from "./componentes/SessaoPesquisa";
import styled from "styled-components";

const AppContainer = styled.body`
  height: 100vh;
  width: 100vw;
  background: red;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <SessaoPesquisa />
    </AppContainer>
  );
}

export default App;

// Section
// h1
//h2
//p
// input pesquisa
