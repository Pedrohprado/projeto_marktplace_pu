/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './App.css';

import { produtos } from './data/produtos';
import { GlobalSotage } from '../context/GlobalContext';

import { Container, ContainerProducts } from './style';

import Header from './components/Header';
import CartTest from './pages/CartTest';
import Product from './components/Product';
import ButtonFun from './components/ButtonFun';

const App = () => {
  const [mark, setMark] = React.useState(false);

  const products = produtos.map(({ codigo, nome, img, kg, price }) => (
    <Product
      key={codigo}
      id={codigo}
      nome={nome}
      imagem={img}
      peso={kg}
      price={price}
    />
  ));

  return (
    <GlobalSotage>
      <Container>
        <Header markopen={() => setMark(!mark)} />
        {!mark ? null : <CartTest markopen={() => setMark(!mark)} />}
        <ContainerProducts>{products}</ContainerProducts>
        <ButtonFun namebutton={'colocar no carrinho'} />
      </Container>
    </GlobalSotage>
  );
};

export default App;
