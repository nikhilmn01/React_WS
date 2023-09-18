import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems =
        <ul>
            {[
                {
                    id: 'm1',
                    name: 'Sushi',
                    amount: 2,
                    price: 22.99,
                },
                {
                    id: 'm2',
                    name: 'Schnitzel',
                    amount: 1,
                    price: 16.5,
                },
            ].map(item => {
                return <li>{item.name}</li>
            })
            }
        </ul>

    return (
        <Modal onHide={props.onHide}>
            {cartItems}
            <div className={classes.total}>
                <span> Total Amount</span>
                <span> 35.62 </span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHide}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>

    );
}

export default Cart;