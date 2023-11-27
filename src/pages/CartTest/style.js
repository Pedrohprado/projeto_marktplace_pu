import styled from 'styled-components';

export const Mark = styled.div`
  width: 50%;
  height: 300vh;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #10101058;
  background-color: white;
  border-radius: 7px;
  border-left: 1px solid #10101058;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const HeaderMark = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px 30px;
`;

export const ButtonCloseMark = styled.button`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;

  border: none;
  border-radius: 50%;
`;

export const RetLittleCard = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  border-radius: 7px;

  margin-bottom: 20px;
  padding: 10px 0px 15px 0px;
`;

export const LittleCardImg = styled.img`
  width: 120px;
  height: 120px;
`;

export const LittleCardTitle = styled.h1`
  font-size: 0.9rem;
  margin: 10px 0px 10px 0px;
`;

export const LittleCardSub = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-bottom: 20px;
`;

export const LittleCardSubInfo = styled.div`
  padding: 5px 20px;
  background-color: #efefef;
  border-radius: 7px;

  font-size: 0.9rem;
`;
