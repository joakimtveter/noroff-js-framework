import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../components/layout';
import CartItem from '@/components/cart-item';
import formatCurrency from '@/lib/utils/formatCurrency';
import ContentWrapper from '@/components/content-wrapper';

import styles from './cartPage.module.css';

export default function CartPage() {
    const cart = useSelector((state: any) => state.cart);
    const cartItems = cart.contents;
    const cartTotal: number = cart.contents.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

    return (
        <>
            <Layout>
                <ContentWrapper>
                    <h1>My cart</h1>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <>
                            <table className={styles.table}>
                                <CartItemsHeader />
                                <tbody>
                                    {cartItems.map((item: any) => (
                                        <CartItem key={item.id} {...item} />
                                    ))}
                                </tbody>
                                <tfoot className={styles.footer}>
                                    <tr>
                                        <td>Total: {formatCurrency(cartTotal)}</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <div>
                                <Link to={'/checkout-success'}>Checkout</Link>
                            </div>
                        </>
                    )}
                </ContentWrapper>
            </Layout>
        </>
    );
}

function CartItemsHeader() {
    return (
        <thead className={styles.header}>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
            </tr>
        </thead>
    );
}
