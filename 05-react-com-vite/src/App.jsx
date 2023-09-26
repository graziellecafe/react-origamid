import React from 'react';

const titulo =  "React: Origamid";

const App = () => {

  function mostrarNome(sobrenome){
    return "Grazielle " + sobrenome
  }

  const carro = {
    marca: "Ford", 
    ano: 2004, 
    portas: 4
  }

  // estilo 
  const estiloH1 = {
    color: 'blue', 
    fontSize: '20px', 
    fontFamily: 'Helvetica'
  }

  return (
  <>
    {titulo}
    <h1 style={estiloH1}>Testando estilização</h1>
    <p>App React: Aprendendo o Básico</p>
    <a href="https://www.origamid.com" title="Isso é um site">
      Origamid
    </a>
    <p>{mostrarNome("Café")}</p>
    <p>{new Date().getFullYear()}</p>
    <p style={{ color: 'green' }}>Sempre aberta</p>
  </>
  );
};

export default App;

