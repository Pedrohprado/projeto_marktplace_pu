import React from 'react';

import { produtos } from '../../data/produtos';

import { Container, ContainerProducts } from './style';

import CartTest from '../CartTest/index';
import Product from '../../components/Product';
import ButtonFun from '../../components/ButtonFun/ButtonFun';
import Header from '../../components/Header';

const ProductDog = () => {
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
    <Container>
      <Header markopen={() => setMark(!mark)} />
      {!mark ? null : <CartTest markopen={() => setMark(!mark)} />}
      <ContainerProducts>{products}</ContainerProducts>
      <ButtonFun
        markopen={() => setMark(!mark)}
        namebutton={'Ir para o carrinho'}
      />
    </Container>
  );
};

export default ProductDog;
