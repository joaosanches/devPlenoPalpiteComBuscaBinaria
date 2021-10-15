import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // estados do jogo: inicio, executando, fim
  const [estado, setEstado] = useState("INICIO");

  // palpite
  const [palpite, setPalpite] = useState(150);

  // quantidade de chutes feitos
  const [quantidadeChutes, setQuantidadeChutes] = useState(1);

  // valores mínimos e máximos possíveis
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setMin(0);
    setMax(300);
    setQuantidadeChutes(1);
    setPalpite(150);

    setEstado("EXECUTANDO");
  };

  if (estado === "INICIO") {
    return <button onClick={iniciarJogo}>Iniciar jogo</button>;
  }

  const menor = () => {
    setQuantidadeChutes(quantidadeChutes + 1);
    setMax(palpite);

    const proximoPalpite = parseInt((palpite - min) / 2, 10) + min;
    setPalpite(proximoPalpite);
    console.log(proximoPalpite, "menor");
  };

  const maior = () => {
    setQuantidadeChutes(quantidadeChutes + 1);
    setMin(palpite);

    const proximoPalpite = parseInt((max - palpite) / 2, 10) + palpite;
    setPalpite(proximoPalpite);

    console.log(proximoPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {quantidadeChutes} chutes!
        </p>
        <button onClick={iniciarJogo}>Iniciar jogo</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu número é: {palpite}?</p>
      <p>
        Min: {min} / Max: {max}
      </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}
