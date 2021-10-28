


import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({text,onClick,classes}) => {
  return (
    <button className={classes}  onClick={onClick}>{text}</button>
  );
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    classes:PropTypes.string
}
export default Button;