import './Nav.css';

function NavBar(){
  return(
    <>
    <nav className='nav-bar'>
      <ul>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </nav>
    </>
  )
}
export default NavBar;