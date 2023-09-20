import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '@/redux/cartSlice';

import Layout from '@/components/layout';
import Container from '@/components/container';

export default function SuccessPage() {
    const [order, setOrder] = useState([]);
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart);

    const handleCheckout = () => {
        setOrder(cart.contents);
        dispatch(resetCart());
    };
    useEffect(() => {
        handleCheckout();
    }, []);

    return (
        <>
            <Helmet>
                <title>{'Success Page'}</title>
            </Helmet>
            <Layout>
                <Container>
                    <h1>Order confirmation</h1>
                    <p>Thank you for your order!</p>
                    <p>Your order number is: {Math.floor(Math.random() * 1000000000)}</p>

                    <p>Your order:</p>
                    <ul>
                        {order.map((item: any) => (
                            <li key={item.id}>
                                {item.quantity} ea {item.title}
                            </li>
                        ))}
                    </ul>
                </Container>
            </Layout>
        </>
    );
}
