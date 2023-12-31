import { Product } from '../../types/product';
import { Link } from 'react-router-dom';

import { formatCurrency } from '@/lib';

import styles from './product-card.module.css';

function ProductCard(props: Product) {
    const { description, discountedPrice, id, imageUrl, price, title } = props;
    const isDiscounted = price > discountedPrice;
    const discount = Math.round(((price - discountedPrice) / price) * 100);

    return (
        <>
            <li className={styles.card}>
                <img className={styles.image} src={imageUrl} alt='' />
                <div className={styles.body}>
                    <h3 className={styles.title}>
                        <Link className={styles.link} to={`/product/${id}`}>
                            {title}
                        </Link>
                    </h3>
                    <p className={styles.description}> {description} </p>
                    {isDiscounted && (
                        <div className={styles.discount}>
                            <div>–{discount}%</div>
                        </div>
                    )}
                </div>
                <div className={styles.footer}>
                    <p className={styles.price}>
                        {isDiscounted && <span className={styles.old}> {formatCurrency(price)}</span>}
                        <span className={styles.current}>
                            {isDiscounted ? formatCurrency(discountedPrice) : formatCurrency(price)}
                        </span>
                    </p>
                </div>
            </li>
        </>
    );
}

export default ProductCard;
