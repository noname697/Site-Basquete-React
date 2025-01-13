import Header from "./componentes/Header";
import SessaoPesquisa from "./componentes/SessaoPesquisa";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(88,40,0,1) 50%, rgba(0,0,0,1) 100%);
  );
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
