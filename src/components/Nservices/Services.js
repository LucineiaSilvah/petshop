import React from "react";
import '../Nservices/Services.css'
import CardServices from "../Cards/Cards_services";
import banho from '../../img/banho.png';
import tosa from '../../img/bolt.png';
import passeio from '../../img/passeio.png';



function Services(){
  return (
   <>
      
    
     <section className="servicos" id="services">
      
       <CardServices img={banho} descricao='Um banho de carinho para os nossos peludos: onde água e amor se encontram para deixar nossos pets ainda mais radiantes'></CardServices>
       <CardServices img={tosa} descricao='Oferecemos cuidado e expertise para manter a pelagem do seu animal saudável e bonita.'></CardServices>
       <CardServices img={passeio} descricao='Proporcionamos momentos de diversão e exercício para o seu companheiro peludo, promovendo bem-estar e felicidade.'></CardServices>
     </section>
   </>
  );
}
export default Services;