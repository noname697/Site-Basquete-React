import TextosPesquisa from "../TextosPesquisa";
import AreaTextoPesquisa from "../AreaTextoPesquisa";
import styled from "styled-components";

const SessaoPesquisaContainer = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  color: #fff;
`;

function SessaoPesquisa() {
  return (
    <SessaoPesquisaContainer>
      <TextosPesquisa />
      <AreaTextoPesquisa />
    </SessaoPesquisaContainer>
  );
}

export default SessaoPesquisa;
