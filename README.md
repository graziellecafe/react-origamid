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