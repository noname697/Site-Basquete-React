import TextosPesquisa from "../TextosPesquisa";
import InputPesquisa from "../AreaTextoPesquisa";
import styled from "styled-components";
import {
  ResultadoPesquisa,
  JogadorDiv,
  NomeJogador,
  IdadeJogador,
  TimeJogador,
} from "../ResultadoPesquisa";
import { dados } from "../ResultadoPesquisa/dados.js";
import { useState } from "react";

const SessaoPesquisaContainer = styled.section`
  margin-top: 5rem;
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
  const [jogadoresPesquisados, setJogadoresPesquisados] = useState([]);

  return (
    <SessaoPesquisaContainer>
      <TextosPesquisa />
      <InputPesquisa
        placeholder="Digite o nome do jogador aqui."
        onChange={(e) => {
          const textoDigitado = e.target.value;
          const resultadoPesquisa = dados.filter((jogador) =>
            jogador.nome.includes(textoDigitado)
          );
          if (textoDigitado === "" || textoDigitado === null) {
            setJogadoresPesquisados([]);
          } else {
            setJogadoresPesquisados(resultadoPesquisa);
          }
        }}
      />

      
      <ResultadoPesquisa>
        {jogadoresPesquisados.map((jogador, i) => (
          <JogadorDiv key={i}>
            <img src={jogador.img} alt="" />
            <NomeJogador>{jogador.nome}</NomeJogador>
            <IdadeJogador>{jogador.idade + " anos"}</IdadeJogador>
            <TimeJogador>{jogador.time}</TimeJogador>
          </JogadorDiv>
        ))}
      </ResultadoPesquisa>
    </SessaoPesquisaContainer>
  );
}

export default SessaoPesquisa;
