/* eslint-disable react/prop-types */
import React from "react";

import ButtonFun from "../ButtonFun";

import {
  ContainerImg,
  InfoProducts,
  TitleProduto,
  ContainerInfoProduto,
  Info,
  ContainerMM,
  ButtonPut,
} from "./style";

const Product = ({ imagem, nome, peso, price, setCont, cont }) => {
  const [value, setValue] = React.useState(1);

  function handleClick(e) {
    const i = e.target.innerHTML;
    if (i === "+") {
      setValue(value + 1);
    } else if (i == "-" && value > 1) {
      setValue(value - 1);
    }
  }

  return (
    <InfoProducts>
      <ContainerImg>
        <img
          src={imagem}
          alt="produto"
          style={{ width: "300px", height: "340px" }}
        />
      </ContainerImg>

      <TitleProduto>{nome}</TitleProduto>

      <ContainerInfoProduto>
        <Info>{peso} KG</Info>
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
  );
};

export default Product;
