import React from "react";
import { styled } from "@mui/material/styles";
import { Badge } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import estilos from "./CartWidget.module.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 8,
    top: 30,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    fontSize: 10,
    color: `white`,
    background: `green`,
  },
}));

function CartWidget() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={99} color="secondary">
        <ShoppingCartIcon className={estilos.iconoCarrito} />
      </StyledBadge>
    </IconButton>
  );
}

export default CartWidget;
