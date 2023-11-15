import styled from "styled-components";

export const Mark = styled.div`
    width: 50vw;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    background-color: #10101058;
    background-color: white;
    border-radius: 7px;
    border-left: 1px solid #10101058;

    @media screen and (max-width: 500px) {
        width:100vw;     
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