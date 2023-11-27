/* eslint-disable react/prop-types */
import React from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { ButtonCloseMark, HeaderMark, InfoTotalCard, Mark } from './style';
import { produtos } from '../../data/produtos';
import CardItem from '../../../context/CardItem';

const CartTest = ({ markopen }) => {
  const { test, getTotalCartAmount } = React.useContext(GlobalContext);
  const totalAmount = getTotalCartAmount();

  const products = produtos.map(({ codigo, nome, img, kg, price }) => {
    if (test[codigo] !== 0) {
      return (
        <CardItem
          key={codigo}
          id={codigo}
          nome={nome}
          imagem={img}
          peso={kg}
          price={price}
        />
      );
    }
  });

  return (
    <Mark>
      <HeaderMark>
        <h1>Carrinho de compras</h1>
        <ButtonCloseMark onClick={markopen}>X</ButtonCloseMark>
      </HeaderMark>
      {products}
      {totalAmount > 0 ? (
        <InfoTotalCard>Total da compra: {totalAmount} R$</InfoTotalCard>
      ) : (
        <p>carrinho vazio :(</p>
      )}
    </Mark>
  );
};

export default CartTest;
