/* eslint-disable react/prop-types */
import { Heading, Title, ContainerMenu, ContainerMark, MarkUp } from "./style";
import { IoBagHandle, IoMenuOutline } from "react-icons/io5";
const Header = ({ markup }) => {
  return (
    <Heading>
      <ContainerMenu>
        <IoMenuOutline size={30} />
      </ContainerMenu>
      <Title>Purina</Title>
      <ContainerMark>
        <IoBagHandle size={25} />
        {markup ? <MarkUp>{markup}</MarkUp> : ""}
      </ContainerMark>
    </Heading>
  );
};

export default Header;
