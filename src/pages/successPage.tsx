import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '@/redux/cartSlice';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Layout from '@/components/layout';
import Container from '@/components/container';

export default function SuccessPage() {
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart);
    const [order, setOrder] = useState([]);
    const orderNumber = Math.floor(Math.random() * 1000000000);

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
                <title>{`Order ${orderNumber} Confirmed`} </title>
            </Helmet>
            <Layout>
                <Container>
                    <h1>Order confirmation</h1>
                    <p>Thank you for your order!</p>
                    <p>Your order number is: {orderNumber}</p>

                    <p>Your order:</p>
                    <ul>
                        {order.map((item: any) => (
                            <li key={item.id}>
                                {item.quantity} ea {item.title}
                            </li>
                        ))}
                    </ul>

                    <Link to='/'>Go to front page</Link>
                </Container>
            </Layout>
        </>
    );
}
