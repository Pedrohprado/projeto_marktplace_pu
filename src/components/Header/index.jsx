/* eslint-disable react/prop-types */
import React from 'react';
import { Heading, Title, ContainerMenu, ContainerMark, MarkUp } from './style';
import { IoBagHandle, IoMenuOutline } from 'react-icons/io5';
import { GlobalContext } from '../../../context/GlobalContext';
const Header = ({ markopen }) => {
  const { cont } = React.useContext(GlobalContext);
  return (
    <Heading>
      <ContainerMenu>
        <IoMenuOutline size={30} />
      </ContainerMenu>
      <Title>Purina</Title>
      <ContainerMark>
        <IoBagHandle size={25} onClick={markopen} />
        {cont ? <MarkUp onClick={markopen}></MarkUp> : ''}
      </ContainerMark>
    </Heading>
  );
};

export default Header;
