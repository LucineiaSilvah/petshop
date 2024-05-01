import React from "react";
import '../Nservices/Services.css'
import CardServices from "../Cards/Cards_services";
import banho from '../../img/banho.png';
import tosa from '../../img/tosa.png';
import passeio from '../../img/passeio.png';
import Title from "../Title/Title";


function Services(){
  return (
   <div>
      
     <Title texto="Serviços" cor="#fff"></Title>
     <section className="servicos" id="services">
      
       <CardServices img={banho}></CardServices>
       <CardServices img={tosa}></CardServices>
       <CardServices img={passeio}></CardServices>
     </section>
   </div>
  );
}
export default Services;