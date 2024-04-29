import React from "react";
import './Cards_services.css';

function CardServices(prop){
  return (
   <div>
     <div className="card-s">
      
       <img src={prop.img} alt=""/>
        <p>Um banho de carinho para os nossos peludos: onde água e amor se encontram para deixar nossos pets ainda mais radiantes</p>
       <button type="">Contratar</button>
     </div>
   </div>
  );
}
export default CardServices;