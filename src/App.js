import './App.css';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Nservices/Services';
import Title from './components/Title/Title';
import Welcome from './components/Welcome/Welcome';
;
function App() {

  return (
    <div className="App">
    
       <Header></Header>
     
       <Welcome></Welcome>

       <Title texto="Serviços" cor="#fff"></Title>
       <Services> </Services>

       <Title texto="Sobre" cor=""></Title>
       <About></About>

       <Title texto="Contato" cor=""></Title>
       <Contact></Contact>
       
       <Footer></Footer>
      </div>
   
  );
}

export default App;
