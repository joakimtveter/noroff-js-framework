import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, addQty, subtractQty } from '@/redux/cartSlice';

import { formatCurrency } from '@/lib';
import { CartItem } from '@/types/cart';

import Layout from '@/components/layout';
import Container from '@/components/container';
import IconButton from '@/components/icon-button';
import SubtractIcon from '@/icons/subtract';
import AddIcon from '@/icons/add';
import DeleteIcon from '@/icons/delete';

import styles from './cartPage.module.css';

export default function CartPage() {
    const cart = useSelector((state: any) => state.cart);
    const cartItems = cart.contents;
    const dispatch = useDispatch();
    const cartTotal: number = cart.contents.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

    return (
        <>
            <Helmet>
                <title>Cart | MyShop</title>
            </Helmet>
            <Layout>
                <Container>
                    <h1>My cart</h1>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <>
                            <ul className={styles.cartList}>
                                {cartItems.map((item: CartItem) => (
                                    <li key={item.id} className={styles.item}>
                                        <Link to={`/product/${item.id}`} className={styles.details}>
                                            <img className={styles.image} src={item.image} alt='' />
                                            <p>{item.title}</p>
                                        </Link>

                                        <div className={styles.itemQuantity}>
                                            <IconButton
                                                icon={<SubtractIcon />}
                                                label={`Remove one ${item.title} from cart`}
                                                onClick={() =>
                                                    dispatch(subtractQty({ id: item.id, quantity: item.quantity - 1 }))
                                                }
                                            />
                                            <span style={{ paddingBottom: '5px' }}>{item.quantity}</span>
                                            <IconButton
                                                icon={<AddIcon />}
                                                label={`Add one more ${item.title} to cart`}
                                                onClick={() =>
                                                    dispatch(addQty({ id: item.id, quantity: item.quantity + 1 }))
                                                }
                                            />
                                        </div>
                                        <p className={styles.itemPrice}>{formatCurrency(item.price)}</p>
                                        <div className={styles.itemTotal}>
                                            <p>{formatCurrency(item.price * item.quantity)}</p>
                                            <IconButton
                                                icon={<DeleteIcon color={'red'} />}
                                                label={`Remove ${item.title} from cart`}
                                                onClick={() =>
                                                    dispatch(removeItem({ id: item.id, quantity: item.quantity }))
                                                }
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.total}>
                                <p> Total: {formatCurrency(cartTotal)}</p>
                                <p>
                                    <span>Includes 25% VAT: {formatCurrency((cartTotal / 100) * 25)}</span>
                                </p>
                                <p>
                                    <span>Shipping: free </span>
                                </p>
                            </div>
                            <div>
                                <Link className={styles.checkout} to={'/checkout-success'}>
                                    Checkout
                                </Link>
                            </div>
                        </>
                    )}
                </Container>
            </Layout>
        </>
    );
}
