import styled from "styled-components";

const TextosPesquisaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const TituloPesquisa = styled.h1`
  font-size: 42px;
`;

const SubtituloPesquisa = styled.h2`
  font-size: 26px;
  font-weight: 400;
`;

const ParagrafoPesquisa = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

function TextosPesquisa() {
  return (
    <TextosPesquisaContainer>
      <TituloPesquisa>Encontre seu Atleta</TituloPesquisa>
      <SubtituloPesquisa>Procure seu atleta favorito.</SubtituloPesquisa>
      <ParagrafoPesquisa>
        Digite o nome completo ou apelido do jogador para iniciar a busca.
      </ParagrafoPesquisa>
    </TextosPesquisaContainer>
  );
}

export default TextosPesquisa;
