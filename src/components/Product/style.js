import styled from 'styled-components';

export const InfoProducts = styled.div`
  padding: 20px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 7px;

  @media screen and (max-width: 700px) {
    width: 50%;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f6fc;
  margin-bottom: 30px;
`;

export const TitleProduto = styled.h1`
  font-size: 1.5rem;
`;

export const ContainerInfoProduto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  height: 50px;
`;

export const Info = styled.h2`
  font-size: 1rem;
  background-color: #f7f6fc;
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
`;

export const ContainerMM = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  height: 50px;
  border: 1px solid #f7f6fc;
  border-radius: 20px;

  padding: 0px 7px;
  margin: 20px 0px;
`;

export const ButtonPut = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 1.5rem;
`;
