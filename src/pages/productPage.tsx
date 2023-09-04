import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/product';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { addItem } from '@/redux/cartSlice';

import { getProductById } from '@/api';
import formatCurrency from '@/lib/utils/formatCurrency';

// Import Components
import Layout from '../components/layout';
import ContentWrapper from '@/components/content-wrapper';
import TwoColumnLayout from '@/components/two-column-layout';
import ReviewCard from '@/components/review-card';
import ProductTag from '@/components/product-tag';
import ProductRating from '@/components/product-rating';

// Import page styles
import styles from './productPage.module.css';
import LoadingSpinner from '@/components/loading-spinner';
import { CartItem } from '@/types/cart';

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
    };

    const getdata = async () => {
        if (!productId) return;
        const product = await getProductById(productId);
        setData(product);
    };

    useEffect(() => {
        getdata();
    }, []);
    console.log(data);

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
                        <ContentWrapper>
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
                                    <ProductRating rating={data.rating} size={28} raters={data.reviews.length} />
                                    <p className={styles.description}>{data?.description}</p>
                                    <div className={styles.price}>
                                        {isDiscounted && (
                                            <p className={styles.oldPrice}>
                                                <span className='visually-hidden'>Original Price:</span>
                                                {formatCurrency(data.price)}
                                            </p>
                                        )}
                                        <p>
                                            <span className='visually-hidden'>Price:</span>
                                            {formatCurrency(data.discountedPrice)}
                                        </p>
                                    </div>
                                    <form onSubmit={(e) => handleSubmit(e)}>
                                        <label htmlFor='quantity'>Quantity</label>
                                        <input
                                            type='number'
                                            name='quantity'
                                            id='quantity'
                                            min={1}
                                            max={5}
                                            value={quantity}
                                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                                        />
                                        <button type='submit'>Add to cart</button>
                                    </form>
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
                                </div>
                            </TwoColumnLayout>
                        </ContentWrapper>
                    </>
                ) : (
                    <LoadingSpinner />
                )}
            </Layout>
        </>
    );
}

export default ProductPage;
