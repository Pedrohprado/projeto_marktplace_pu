/* eslint-disable react/prop-types */
import { ButtonCloseMark, HeaderMark, Mark } from "./style";

const CartTest = ({ markopen }) => {
  return (
    <Mark>
      <HeaderMark>
        <h1>Carrinho de compras</h1>
        <ButtonCloseMark onClick={markopen}>X</ButtonCloseMark>
      </HeaderMark>
    </Mark>
  );
};

export default CartTest;
