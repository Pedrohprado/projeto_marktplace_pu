/* eslint-disable react/prop-types */
import React from 'react';
import { produtos } from '../src/data/produtos';

export const GlobalContext = React.createContext();

export const GlobalSotage = ({ children }) => {
  // const [test, setTest] = React.useState({
  //   [1010]: 0,
  //   [1011]: 0,
  //   [1012]:0,
  //   [1013]:0
  // });
  const [test, setTest] = React.useState(
    produtos.reduce((acc, produto) => {
      acc[produto.codigo] = 0;
      return acc;
    }, {})
  );

  const [cont, setCont] = React.useState(false);

  const addToCart = (itemId) => {
    setTest((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setCont(true);
  };

  const removeToCart = (itemId) => {
    if (test[itemId] > 0) {
      setTest((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
    if (test[itemId] < 1) {
      setCont(false);
    }
  };

  const zeroToCart = (itemId) => {
    setTest((prev) => ({ ...prev, [itemId]: (prev[itemId] = 0) }));
    setCont(false);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in test) {
      if (test[item] > 0) {
        let itemInfo = produtos.find(
          (produto) => produto.codigo === Number(item)
        );
        totalAmount += test[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  console.log(test);

  return (
    <GlobalContext.Provider
      value={{
        test,
        cont,
        addToCart,
        removeToCart,
        zeroToCart,
        getTotalCartAmount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
