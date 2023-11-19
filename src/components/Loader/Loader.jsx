import { BallTriangle } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#ff0000"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
  );
};