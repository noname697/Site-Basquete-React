import Logo from "../logo";
import ListaHeader from "../ListaHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  background: black;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <ListaHeader />
    </HeaderContainer>
  );
}

export default Header;
