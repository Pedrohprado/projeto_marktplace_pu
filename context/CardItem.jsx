/* eslint-disable react/prop-types */
import React from 'react';
import { GlobalContext } from './GlobalContext';
import {
  RetLittleCard,
  LittleCardClose,
  LittleCardImg,
  LittleCardTitle,
  LittleCardSub,
  LittleCardSubInfo,
} from '../src/pages/CartTest/style';
const CardItem = ({ id, imagem, nome, peso, price }) => {
  const { test, zeroToCart } = React.useContext(GlobalContext);
  return (
    <RetLittleCard>
      <LittleCardClose onClick={() => zeroToCart(id)}>X</LittleCardClose>
      <LittleCardImg src={imagem} alt='' />
      <LittleCardTitle>{nome}</LittleCardTitle>
      <LittleCardSub>
        <LittleCardSubInfo> {test[id]} pacotes</LittleCardSubInfo>
        <LittleCardSubInfo>{test[id] * peso} KG</LittleCardSubInfo>
      </LittleCardSub>
      <LittleCardSubInfo>R$ {test[id] * price}</LittleCardSubInfo>
    </RetLittleCard>
  );
};

export default CardItem;
