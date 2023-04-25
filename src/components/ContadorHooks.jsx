import React, { useState } from "react";

const ContadorHooks = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <h2>uso de useState</h2>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <h3>{contador}</h3>
    </>
  );
};

export default ContadorHooks;
