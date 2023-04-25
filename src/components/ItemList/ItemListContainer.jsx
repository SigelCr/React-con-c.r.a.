import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock";
import estilos from "./ItemList.module.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    const productsFiltered = products.filter(
      (prod) => prod.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productsFiltered : products);
    });
    tarea.then((res) => setItems(res)).catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      <h3 className={estilos.titulos}>
        Cartuchos {categoryName ? `${categoryName}` : ""}
      </h3>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
