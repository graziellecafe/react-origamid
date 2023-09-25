import { useState } from "react";
function App(){
  const [count, setCount] = useState(0); 

  /*function handleClick() {
    setCount(count+1)
  }

  return(
    <div>
      <button onClick={handleClick}>Comprar: {count}</button>
      <p> Total: {count} </p>
      <p> Preço: {count * 250} </p>
    </div>
  )*/

  return(
    <div>
      <button onClick={() => setCount(count+1)}>Comprar: {count} </button>
      <p> Total: {count} </p>
      <p> Preço: {count * 250} </p>
    </div>
  )
}


  
  

export default App;
