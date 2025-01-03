import logo from "../../imagens/imagemLogo.png";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 3rem;
  gap: 3rem;
`;

const TituloLogo = styled.h1`
  color: white;
  font-weight: 300;
`;

function Logo() {
  return (
    <LogoContainer>
      <img src={logo} alt="" />
      <TituloLogo>
        <strong>Manenti</strong> Basquete
      </TituloLogo>
    </LogoContainer>
  );
}

export default Logo;
