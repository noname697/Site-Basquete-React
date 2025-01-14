import Logo from "../logo";
import ListaHeader from "../ListaHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  background: ${(props) => props.corDeFundo || "#000"};
`;

function Header() {
  return (
    <HeaderContainer corDeFundo="lightblue">
      <Logo />
      <ListaHeader lista={["Início", "Times", "NBB"]} />
    </HeaderContainer>
  );
}

export default Header;
