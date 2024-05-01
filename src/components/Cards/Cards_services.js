import React from "react";
import './Cards_services.css';

function CardServices(prop){
  return (
   <div>
     <div className="card-s">
      
       <img src={prop.img} alt=""/>
        <p>{prop.descricao}</p>
       <button type="">Contratar</button>
     </div>
   </div>
  );
}
export default CardServices;