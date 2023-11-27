/* eslint-disable react/prop-types */
import React from 'react';

import {
  ContainerImg,
  InfoProducts,
  TitleProduto,
  ContainerInfoProduto,
  Info,
  ContainerMM,
  ButtonPut,
} from './style';
import { GlobalContext } from '../../../context/GlobalContext';

const Product = ({ id, imagem, nome, peso, price }) => {
  const { test, addToCart, removeToCart } = React.useContext(GlobalContext);

  return (
    <InfoProducts>
      <ContainerImg>
        <img
          src={imagem}
          alt='produto'
          style={{ width: '300px', height: '340px' }}
        />
      </ContainerImg>

      <TitleProduto>{nome}</TitleProduto>

      <ContainerInfoProduto>
        <Info>{peso} KG</Info>
        <Info>R$ {price}</Info>
      </ContainerInfoProduto>

      <ContainerMM>
        <ButtonPut onClick={() => removeToCart(id)}>-</ButtonPut>
        <p>{test[id]}</p>
        <ButtonPut onClick={() => addToCart(id)}>+</ButtonPut>
      </ContainerMM>
    </InfoProducts>
  );
};

export default Product;
