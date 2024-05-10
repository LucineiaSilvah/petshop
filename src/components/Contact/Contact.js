import React from 'react';
import './Contact.css';
import contact from '../../img/contact.png';


function Contact(){
  return (
   <>
     
     <section className="contato" id='contact'>
   
   
        <form>
        
            <legend>Contate - nos</legend>
       
          <label for="nome" >Nome</label>
         <input type='text' name='nome' required/>
          <label for="email">E-mail</label>
         <input type='email' name='email' required/>
         <label for="mensagem">Mensagem</label>
         <input type='text' name='mensagem' required/>
         <button type="submit">Enviar</button>
   
         <span>Ou Fale conosco por:</span>  
        <ul>
        <li> 
          <i class="fa-brands fa-instagram fa-xl" title='instagram'></i> 
        </li>
        <li> 
        <i class="fa-brands fa-facebook fa-xl" title='facebook'></i>
        </li>
        <li> 
        <i class="fa-brands fa-whatsapp fa-xl" title='whatsapp'></i>
        </li>
      </ul>
        </form>
   
      <img src={contact} alt='imagem mãos segunrando um celular'/>
     </section>
   </>
  );
}
export default Contact;