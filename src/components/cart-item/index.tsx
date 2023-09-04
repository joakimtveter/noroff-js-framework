import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeItem, addQty, subtractQty } from '@/redux/cartSlice';

import { CartItem } from '@/types/cart';
import formatCurrency from '@/lib/utils/formatCurrency';

import styles from './cart-item.module.css';

export default function CartItem(props: CartItem) {
    const { id, title, price, quantity, image } = props;
    const dispatch = useDispatch();

    return (
        <tr className={styles.item}>
            <td className={styles.details}>
                <img className={styles.image} src={image} alt='' />
                <p>{title}</p>
            </td>
            <td className={styles.quantity}>
                <button onClick={() => dispatch(subtractQty({ id, quantity: quantity - 1 }))}>-</button>
                <div>{quantity}</div>
                <button onClick={() => dispatch(addQty({ id, quantity: quantity + 1 }))}>+</button>
            </td>
            <td>
                <p>{formatCurrency(price)}</p>
            </td>
            <td>
                <p>{formatCurrency(price * quantity)}</p>
            </td>
            <td>
                <Link to={`/product/${id}`}>View</Link>
                <button onClick={() => dispatch(removeItem({ id, quantity }))}>Remove</button>
            </td>
        </tr>
    );
}
