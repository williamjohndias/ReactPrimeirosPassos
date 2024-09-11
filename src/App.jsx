import React from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'notebook', preco: 'R$ 2500' },
    { nome: 'geladeira', preco: 'R$ 3000' },
    { nome: 'smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};
const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'notebook', preco: 'R$ 2500' },
    { nome: 'geladeira', preco: 'R$ 3000' },
    { nome: 'smartphone', preco: 'R$ 1500' },
    { nome: 'guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$', '')))
    .reduce((a, b) => a + b);

  return (
    <>
      <div className="">
        <h1>Nome: {dados.cliente}</h1>
        <p>Idade: {dados.idade}</p>
        <div>
          <p>
            Situação:
            <span style={{ color: dados.ativa ? 'green' : 'red' }}>
              {' '}
              {dados.ativa ? 'ativo' : 'inativo'}
            </span>
          </p>
        </div>
        <p>Total: R$ {total}</p>
        <p>{total > 10000 && 'Você está gastando muito'}</p>
      </div>
    </>
  );
};

export default App;
