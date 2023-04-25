import React from "react";
import { Link } from "react-router-dom";
import estilos from "./ItemDetail.module.css";
import { products } from "../../productsMock";

const ItemDetail = ({ product }) => {
  console.log(product.categoryName);
  return (
    <div className={estilos.contenedor}>
      <h1 className={estilos.titulos}>{product.title}</h1>
      <img
        src={product.img}
        className={
          product.categoryName === "playstation"
            ? `${estilos.imgCardPlaystation}`
            : `${estilos.imgCard}`
        }
      />
      <h3 className={estilos.descripcion}>{product.fullDescription}</h3>
      <p className={estilos.precio}>${product.price}</p>
      <Link to="/" className={estilos.boton}>
        Volver al home
      </Link>
    </div>
  );
};

export default ItemDetail;
