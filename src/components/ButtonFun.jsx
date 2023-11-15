/* eslint-disable react/prop-types */
import { Button } from "../style";

const ButtonFun = ({ onClick, namebutton }) => {
  return <Button onClick={onClick}>{namebutton}</Button>;
};

export default ButtonFun;
