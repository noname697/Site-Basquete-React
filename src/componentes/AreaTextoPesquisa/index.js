import styled from "styled-components";

const InputPesquisa = styled.input`
  width: 50%;
  min-height: 40px;
  border: 1px solid #d3d3d3;
  border-radius: 25px;
  padding: 0 50px;
  outline: none;

  &::placeholder {
    color: rgb(134, 134, 134);
  }
`;

export default InputPesquisa;
