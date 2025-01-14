import styled from "styled-components";


const ListaHeaderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 3rem;
`;

const UlContainer = styled.ul`
  display: flex;
  gap: 2rem;
`;

const LiHeader = styled.li`
  color: white;
  font-size: 20px;
  font-weight: 100;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;

function ListaHeader(props) {
  return (
    <ListaHeaderContainer>
      <UlContainer>
        {props.lista.map((i, index) => (
          <LiHeader key={index}>{i}</LiHeader>
        ))}
      </UlContainer>
    </ListaHeaderContainer>
  );
}

export default ListaHeader;
