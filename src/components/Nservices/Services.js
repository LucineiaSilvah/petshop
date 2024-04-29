import React from "react";
import '../Nservices/Services.css'
import CardServices from "../Cards/Cards_services";
import banho from '../../img/banho.png';
import tosa from '../../img/tosa.png';
import passeio from '../../img/passeio.png';
function Services(){
  return (
   <div>
       <h2>Nossos Serviços</h2>
     <section className="servicos">
       <CardServices img={banho}></CardServices>
       <CardServices img={tosa}></CardServices>
       <CardServices img={passeio}></CardServices>
     </section>
   </div>
  );
}
export default Services;