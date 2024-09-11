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
  const styleAtivaInativa = {
    color: dados.ativa === false ? 'red' : 'green',
  };

  const converterPreco = (preco) => {
    return Number(preco.replace('R$', '').replace(/\s/g, ''));
  };
  const precos = dados.compras.map((compra) => converterPreco(compra.preco));
  const total = precos.reduce((acc, preco) => acc + preco, 0);

  const muitoGasto = {
    dadosTotal: total <= 10000 ? '' : 'Você está gastando muito',
  };

  return (
    <>
      <div className="">
        <h1>Nome: {dados.cliente}</h1>
        <p>Idade: {dados.idade}</p>
        <div>
          <p>
            Situação:
            <b style={styleAtivaInativa}>
              {' '}
              {dados.ativa ? 'ativo' : 'inativo'}
            </b>
          </p>
        </div>
        <p>Total gasto: {total}</p>
        <p>{muitoGasto.dadosTotal}</p>
      </div>
    </>
  );
};

export default App;
