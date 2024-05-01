import './About.css';
import sobre from '../../img/sobre.png';
import Title from '../Title/Title';
function About() {
  return (
    <>
    <Title texto="Sobre"></Title>
    <div className="sobre" id='sobre'>
    <img src={sobre} alt={sobre} />
    
    <p>
Cuidar de animais domésticos é muito mais do que apenas alimentá-los e garantir que tenham um teto sobre suas cabeças. É um compromisso diário, uma promessa de amor e responsabilidade que assumimos quando trazemos esses seres especiais para nossas vidas.

 Assim lutamos para que sempre possamos honrar esse compromisso que nos é passado mesmo que por poucas horas, dando-lhes o melhor de nós mesmos e garantindo que se sintam felizes da entrada até seu retorno, calmos e cheirosos para seus donos.</p>

    </div>
    </>

    
    

    
   
  );
}

export default About;