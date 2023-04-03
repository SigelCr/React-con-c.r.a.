//import "./Navbar.css"; //para importar el css

import CartWidget from "../CartWidget/CartWidget";
import estilos from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className={estilos.containerNavbar}>
      <img
        src="https://res.cloudinary.com/difrhbjlk/image/upload/v1680558179/logotipo_ftge2j.jpg"
        className={estilos.logotipo}
      />
      <ul className={estilos.navbar}>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Hombres</a>
        </li>
        <li>
          <a href="#">Mujeres</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
