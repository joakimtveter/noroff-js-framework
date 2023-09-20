import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatCurrency } from '@/lib';

import Layout from '@/components/layout';
import CartItem from '@/components/cart-item';
import Container from '@/components/container';

import styles from './cartPage.module.css';

export default function CartPage() {
    const cart = useSelector((state: any) => state.cart);
    const cartItems = cart.contents;
    const cartTotal: number = cart.contents.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

    return (
        <>
            <Helmet>
                <title>Cart | MyStore</title>
            </Helmet>
            <Layout>
                <Container>
                    <h1>My cart</h1>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <>
                            <table className={styles.table} role='table'>
                                <thead>
                                    <tr>
                                        <th className={styles.thItem}>Item</th>
                                        <th className={styles.thQty}>Quantity</th>
                                        <th className={styles.thPrice}>Price</th>
                                        <th className={styles.thTotal}>Total</th>
                                    </tr>
                                </thead>
                                <tbody role='rowgroup'>
                                    {cartItems.map((item: any) => (
                                        <CartItem key={item.id} {...item} />
                                    ))}
                                </tbody>
                            </table>
                            <div>
                                <p className={styles.total}> Total: {formatCurrency(cartTotal)}</p>
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
