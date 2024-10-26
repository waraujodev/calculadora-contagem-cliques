import React, { useState } from "react";
import "./Contador.css";

const Contador = () => {
  const [contagem, setContagem] = useState(0);

  const incrementar = () => setContagem(contagem + 1);
  const decrementar = () => setContagem(contagem - 1);

  return (
    <div className="contador-container">
      <h1>Contador de Cliques</h1>
      <div className="itens">
        <button onClick={incrementar}>Incrementar</button>
        <h2>Contagem: {contagem}</h2>
        <button onClick={decrementar}>Decrementar</button>
      </div>
    </div>
  );
};

export default Contador;
