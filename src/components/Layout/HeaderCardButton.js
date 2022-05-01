import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.scss';

export default function HeaderCardButton(props) {
  return (
    <button
      type="button"
      className={classes.button}
      onClick={props.onClick}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>
        Your Cart
      </span>
      <span className={classes.badge}>
        3
      </span>
    </button>
  );
}
