/* eslint-disable react/prop-types */
import { Button } from '../style';

const ButtonFun = ({ markopen, namebutton }) => {
  const handleCLick = () => {
    window.scrollTo(0, 0);
    markopen();
  };
  return <Button onClick={handleCLick}>{namebutton}</Button>;
};

export default ButtonFun;
