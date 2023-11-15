import React from "react";
import "./App.css";

import { produtos } from "./data/produtos";

import ButtonFun from "./components/ButtonFun";

import {
  Container,
  ContainerImg,
  InfoProducts,
  TitleProduto,
  ContainerInfoProduto,
  Info,
  ContainerMM,
  ButtonPut,
} from "./style";
import Header from "./components/Header";

const App = () => {
  const [cont, setCont] = React.useState(0);
  const [value, setValue] = React.useState(1);

  function handleClick(e) {
    const i = e.target.innerHTML;
    if (i === "+") {
      setValue(value + 1);
    } else if (i == "-" && value >= 1) {
      setValue(value - 1);
    }
  }

  const product = produtos.map(({ codigo, nome, img, kg, price }) => (
    <InfoProducts key={codigo}>
      <ContainerImg>
        <img
          src={img}
          alt="produto"
          style={{ width: "300px", height: "340px" }}
        />
      </ContainerImg>

      <TitleProduto>{nome}</TitleProduto>

      <ContainerInfoProduto>
        <Info>{kg} KG</Info>
        <Info>R$ {price}</Info>
      </ContainerInfoProduto>

      <ContainerMM>
        <ButtonPut onClick={handleClick}>-</ButtonPut>
        <p>{value}</p>
        <ButtonPut onClick={handleClick}>+</ButtonPut>
      </ContainerMM>
      <ButtonFun
        onClick={() => {
          setCont(cont + value);
        }}
        namebutton={"colocar no carrinho"}
      />
    </InfoProducts>
  ));

  return (
    <Container>
      <Header markup={cont} />
      {product}
    </Container>
  );
};

export default App;
