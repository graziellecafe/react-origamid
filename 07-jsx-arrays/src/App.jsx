function App() {
  const livros = [
    { nome: 'Game of Thrones', ano: 1996}, 
    { nome: 'A Clash of Kings', ano: 1998},
    { nome: 'A Storm of Swords', ano: 2000}
  ];

  return (
    <>
      <ul>
        {livros
        .filter(({ ano }) => ano >= 1998)
        .map(({nome, ano}) => (
          <li key={nome}>{nome} {ano}</li>
        ))}
      </ul>
    </>
  )
}











/*function App() {
 const produtos = ['Notebook', 'Smartphone', 'Tablet'];  
const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>]
const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight']; 


  return (
    <>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </>
  )
}*/



export default App
