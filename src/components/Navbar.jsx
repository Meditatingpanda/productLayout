import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <div className="min-h-[3rem] p-2 shadow-lg bg-gray-400 text-3xl pl-4 text-white">
      <ShoppingCartIcon sx={{fontSize:'2rem',mt:-1}}/>
      Ecommerce
    </div>
  );
}

export default Navbar;
