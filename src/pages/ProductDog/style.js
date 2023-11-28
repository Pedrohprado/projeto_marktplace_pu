import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const ContainerProducts = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;

  @media screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
