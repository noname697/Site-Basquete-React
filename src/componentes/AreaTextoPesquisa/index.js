import styled from "styled-components";

const InputPesquisaContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const InputPesquisa = styled.input`
  width: 50%;
  height: 40px;
  border: 1px solid #d3d3d3;
  border-radius: 25px;
  padding: 0 50px;
  outline: none;

  &::placeholder {
    color: rgb(134, 134, 134);
  }
`;

function AreaTextoPesquisa() {
  return (
    <InputPesquisaContainer>
      <InputPesquisa type="text" placeholder="Digite o nome do jogador." />
    </InputPesquisaContainer>
  );
}

export default AreaTextoPesquisa;
