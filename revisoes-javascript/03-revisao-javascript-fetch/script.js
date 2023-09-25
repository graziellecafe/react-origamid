// fetch: requisiões assíncronas normalmente quando vamos utilizar uma api 
// exemplo: puxar informação do servidor com a qtde de produtos que está nele 

fetch('https://ranekapi.origamid.dev/json/api/produto')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });








