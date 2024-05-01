import React from "react";
import '../Header/Header.css'
import NavBar from "../Nav/Nav";

function Header(){
  return (
   <div>
     <header className="cabecalho">
    
     <h1>Só A<i class="fa-solid fa-paw"></i>ores</h1>
      <NavBar></NavBar>
     </header>
   </div>
  );
}
export default Header;