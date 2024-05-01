import './Title.css';

function Title(props){
  return (
    <div  className='titulo' style={{backgroundColor:props.cor}}>
    
      <h2 >{props.texto}</h2>
    </div>
  )
}

export default Title;