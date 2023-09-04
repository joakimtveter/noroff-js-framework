import styles from './review-card.module.css';
import ProductRating from '@/components/product-rating';

type ReviewCardProps = {
    rating: number;
    description: string;
    username: string;
};

export default function ReviewCard(props: ReviewCardProps) {
    const { rating, description, username } = props;

    return (
        <li className={styles.card}>
            <ProductRating rating={rating} />
            <p className={styles.description}>{description}</p>
            <p className={styles.username}>{username}</p>
        </li>
    );
}
