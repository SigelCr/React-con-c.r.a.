import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === Number(id)); //Number(id) o +id para convertir de string a numerico
    setProduct(encontrado);
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};
export default ItemDetailContainer;
