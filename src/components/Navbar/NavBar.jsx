import BurgerButtom from "../BurgerButton/BurgerButtom";
import CartWidget from "../CartWidget/CartWidget";
import estilos from "./Navbar.module.css";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  const [click, setClick] = useState(false);
  //cuando esta true lo pasa a false y viceversa
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className={estilos.containerNavbar}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/difrhbjlk/image/upload/v1680910802/logo_ror0vj.png"
            title="mega drive"
            alt="mega drive"
            className={estilos.logotipo}
          />
        </Link>
        <div
          className={`${estilos.navbar} ${click ? estilos.navbarMobile : ""}`}
        >
          <Link to="/category/nintendo">Nintendo</Link>
          <Link to="/category/genesis">Génesis</Link>
          <Link to="/category/playstation">PlayStation</Link>
        </div>
        <div className={estilos.burguer}>
          <BurgerButtom click={click} handleClick={handleClick} />
        </div>
        <div className={estilos.carrito}>
          <CartWidget />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
