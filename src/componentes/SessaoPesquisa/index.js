import TextosPesquisa from "../TextosPesquisa";
import InputPesquisa from "../InputPesquisa";
import styled from "styled-components";

const SessaoPesquisaContainer = styled.section`
  width: 100%;
  height: 500px;
  background: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;

function SessaoPesquisa() {
  return (
    <SessaoPesquisaContainer>
      <TextosPesquisa />
      <InputPesquisa />
    </SessaoPesquisaContainer>
  );
}

export default SessaoPesquisa;
