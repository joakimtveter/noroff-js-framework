import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeItem, addQty, subtractQty } from '@/redux/cartSlice';

import { CartItem } from '@/types/cart';
import { formatCurrency } from '@/lib';

import IconButton from '@/components/icon-button';
import SubtractIcon from '@/icons/subtract';
import AddIcon from '@/icons/add';
import DeleteIcon from '@/icons/delete';

import styles from './cart-item.module.css';

export default function CartItem(props: CartItem) {
    const { id, title, price, quantity, image } = props;
    const dispatch = useDispatch();

    return (
        <tr>
            <td role='cell'>
                <Link to={`/product/${id}`} className={styles.details}>
                    <img className={styles.image} src={image} alt='' />
                    <p>{title}</p>
                </Link>
            </td>
            <td>
                <div className={styles.quantity}>
                    <IconButton
                        icon={<SubtractIcon />}
                        label={`Remove one ${title} from cart`}
                        onClick={() => dispatch(subtractQty({ id, quantity: quantity - 1 }))}
                    />
                    <span style={{ paddingBottom: '5px' }}>{quantity}</span>
                    <IconButton
                        icon={<AddIcon />}
                        label={`Add one more ${title} to cart`}
                        onClick={() => dispatch(addQty({ id, quantity: quantity + 1 }))}
                    />
                </div>
            </td>
            <td>
                <p>{formatCurrency(price)}</p>
            </td>
            <td className={styles.tdTotal}>
                <div className={styles.total}>
                    <p>{formatCurrency(price * quantity)}</p>
                    <IconButton
                        icon={<DeleteIcon color={'red'} />}
                        label={`Remove ${title} from cart`}
                        onClick={() => dispatch(removeItem({ id, quantity }))}
                    />
                </div>
            </td>
        </tr>
    );
}
