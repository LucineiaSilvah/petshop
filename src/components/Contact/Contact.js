import React from 'react';
import './Contact.css';
import contact from '../../img/contact.png';
function Contact(){
  return (
   <div>
       <h2>Contato</h2>
     <section className="contato">
   
        <form>
          <fieldset>
            <legend>Contate - nos</legend>
          </fieldset>
          <label for="nome" >Nome</label>
         <input type='text' name='nome' required/>
          <label for="email">E-mail</label>
         <input type='email' name='email' required/>
         <label for="mensagem">Mensagem</label>
         <input type='text' name='mensagem' required/>
         <button type="submit">Enviar</button>
        </form>
   
      <img src={contact} alt='imagem mãos segunrando um celular'/>
     </section>
   </div>
  );
}
export default Contact;