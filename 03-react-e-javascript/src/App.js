import './App.css';
import { useState } from 'react'; 

function App() {
  const [contador, setContador] = useState(1); 

  function handleClick(){
    setContador(contador+1)
  }

  return (
    <div className="App">
      <div>
        <h2>Função dentro do onClick</h2>
        <p>Total: {contador} </p>
        <p> Preço: {contador * 250} </p>
        <button onClick = {() => setContador(contador+1)}>Comprar</button>
      </div>*/

      <div>
        <h2>Contador utilizando função</h2>
        <p>Total: {contador} </p>
        <p> Preço: {contador * 250} </p>
        <button onClick={handleClick}>Comprar</button>
      </div>
    </div>
  );


}

export default App;
