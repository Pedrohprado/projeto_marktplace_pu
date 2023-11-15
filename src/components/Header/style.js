import styled from "styled-components";

export const Heading = styled.header`
  width: 100%;
  height: 30px;
  padding: 40px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
`;

export const ContainerMenu = styled.button`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f6fc;
  border: none;
  border-radius: 50%;

  cursor: pointer;
`;

export const ContainerMark = styled.button`
  padding: 5px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  position: relative;

  cursor: pointer;
`;

export const MarkUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 15px;
  height: 15px;

  position: absolute;
  bottom: 7px;
  right: 0;

  border-radius: 50%;

  font-size: 0.8rem;
  color: white;
  background-color: red;
`;
