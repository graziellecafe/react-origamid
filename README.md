# React: Origamid
## Introdução 
### React Element
 Todo elemento React é criado com a função createElement. O Babel é o responsável por transformar o elemento criado com JSX (que se parece com HTML) em funções de React.

```js
function App() {
  return <div id="container">Meu App</div>;
}
// É transformado em:
function App() {
  return React.createElement('div', { id: 'container' }, 'Meu App');
}
```

### Componentes 
Permitem você dividir a sua interface em pequenos elementos. São criados através de funções que retornam elementos React.

```js
// Function Component
const Button = () => {
  return <button>Comprar</button>;
};
```

### Javascript
Utilizamos as {} para executar expressões de JavaScript e mostrar o resultado no DOM.

```js
const Produtos = () => {
  const produto1 = 'Camisa';
  const produto2 = 'Bermuda';

  return (
    <div>
      <button>
        Comprar {produto1} - R$ {Math.random() * 100}
      </button>
      <button>
        Bermuda {produto2} - R$ {Math.random() * 100}
      </button>
    </div>
  );
};

```

### Eventos
Podemos atribuir eventos diretamente aos elementos.

```js
const Produtos = () => {
  function handleClick(event) {
    console.log('Comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};
```

### Hooks
Utilizamos o React pela facilidade de sincronização do estado. Os Hooks são funções especiais de React, o useState possibilita a sincronização do estado.


## Ferramentas de Automação 
### Bundler
- Agrupa (bundle) o código do seu aplicativo
- Permite definirmos os componentes em diferentes arquivos para melhor organização
- Facilita a importação de código externo instalado via NPM
- ESBuild, Rollup, Parcel, Turbopack, Webpack

### Transpiler
- Transforma JSX return <div></div> em funções de React `React.createElement()`
- Transforma JavaScript novo const em JavaScript antigo var
- Babel, SWC, ESBuild

## Ferramentas Front End 
```js
npm create vite@latest .
npm install
```

### Comandos
Inicia o desenvolvimento
```js
npm run dev
```

Cria a build final
```js
npm run build
```