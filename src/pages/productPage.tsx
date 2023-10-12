import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/product';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { addItem } from '@/redux/cartSlice';

import { getProductById } from '@/api';
import { formatCurrency } from '@/lib';

// Import Components
import Layout from '../components/layout';
import Container from '@/components/container';
import TwoColumnLayout from '@/components/two-column-layout';
import ReviewCard from '@/components/review-card';
import ProductTag from '@/components/product-tag';
import ProductRating from '@/components/product-rating';

// Import page styles
import styles from './productPage.module.css';
import LoadingSpinner from '@/components/loading-spinner';
import { CartItem } from '@/types/cart';
import Button from '@/components/button';
import AddIcon from '@/icons/add';
import IconButton from '@/components/icon-button';
import SubtractIcon from '@/icons/subtract';

function ProductPage() {
    const { productId } = useParams();
    const [data, setData] = useState<Product>();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!data) return;
        const item: CartItem = {
            id: data.id,
            image: data.imageUrl,
            title: data.title,
            price: data.discountedPrice || data.price,
            quantity,
        };

        dispatch(addItem(item));
        setQuantity(1);
    };

    const getdata = async () => {
        if (!productId) return;
        const product = await getProductById(productId);
        setData(product);
    };

    useEffect(() => {
        getdata();
    }, []);

    const isDiscounted = data?.discountedPrice && data?.discountedPrice < data?.price ? true : false;
    const discountPercentage = data?.discountedPrice
        ? Math.round(((data.price - data.discountedPrice) / data.price) * 100)
        : 0;

    return (
        <>
            <Layout mainClassName='product-page'>
                <Helmet>
                    <title>{data?.title + ' - MyShop' || 'MyShop'}</title>
                    <meta name='description' content={data?.description} />
                    <meta name='keywords' content={'Product, Shop, ' + data?.tags.join(', ')} />
                </Helmet>
                {data ? (
                    <>
                        <Container>
                            <TwoColumnLayout>
                                <div className={styles.image}>
                                    <picture>
                                        <img src={data?.imageUrl} alt='' />
                                    </picture>
                                    {isDiscounted && (
                                        <div className={styles.discount}>
                                            <div>-{discountPercentage}%</div>
                                        </div>
                                    )}
                                </div>
                                <div className={styles.content}>
                                    <h1 className={styles.h1}>{data.title}</h1>
                                    <p className={styles.sku}>SKU: {data?.id}</p>
                                    <ul className={styles.tags}>
                                        {data.tags.map((tag) => (
                                            <ProductTag key={tag}>{tag}</ProductTag>
                                        ))}
                                    </ul>
                                    {data?.rating > 0 ? (
                                        <ProductRating rating={data.rating} size={28} raters={data.reviews.length} />
                                    ) : null}
                                    <p className={styles.description}>{data?.description}</p>
                                    <div className={styles.price}>
                                        {isDiscounted && (
                                            <p className={styles.oldPrice}>
                                                <span className='visually-hidden'>Original Price:</span>
                                                {formatCurrency(data.price)}
                                            </p>
                                        )}
                                        <p className={styles.currentPrice}>
                                            <span className='visually-hidden'>Price:</span>
                                            {formatCurrency(data.discountedPrice)}
                                        </p>
                                    </div>
                                    <form className={styles.form} onSubmit={handleSubmit}>
                                        <label htmlFor='quantity' className='visually-hidden'>
                                            Quantity
                                        </label>
                                        <IconButton
                                            disabled={Boolean(quantity < 2)}
                                            icon={<SubtractIcon />}
                                            label='Decrease quantity'
                                            onClick={() => setQuantity(quantity - 1)}
                                        />
                                        <input
                                            className={styles.input}
                                            type='number'
                                            name='quantity'
                                            id='quantity'
                                            min={1}
                                            max={9}
                                            value={quantity}
                                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                                        />
                                        <IconButton
                                            icon={<AddIcon />}
                                            label='Increase quantity'
                                            onClick={() => setQuantity(quantity + 1)}
                                        />
                                        <Button type='submit'>Add to cart</Button>
                                    </form>
                                </div>
                                {data?.reviews.length > 0 && (
                                    <div>
                                        <h2 className={styles.h2}>Reviews: ({data.reviews.length})</h2>
                                        <ul className={styles.reviews}>
                                            {data.reviews.map((review) => (
                                                <ReviewCard key={review.id} {...review} />
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </TwoColumnLayout>
                        </Container>
                    </>
                ) : (
                    <LoadingSpinner />
                )}
            </Layout>
        </>
    );
}

export default ProductPage;
