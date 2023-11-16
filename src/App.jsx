/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./App.css";

import { produtos } from "./data/produtos";

import { Container, ContainerProducts } from "./style";

import Header from "./components/Header";
import CartTest from "./pages/CartTest";
import Product from "./components/Product";

const App = () => {
  const [cont, setCont] = React.useState(0);
  const [mark, setMark] = React.useState(0);

  const products = produtos.map(({ codigo, nome, img, kg, price }) => (
    <Product
      key={codigo}
      nome={nome}
      imagem={img}
      peso={kg}
      price={price}
      setCont={setCont}
      cont={cont}
    />
  ));

  return (
    <Container>
      <Header markup={cont} markopen={() => setMark(!mark)} />
      {!mark ? null : <CartTest markopen={() => setMark(!mark)} />}
      <ContainerProducts>{products}</ContainerProducts>
    </Container>
  );
};

export default App;
