import styles from './product-rating.module.css';

type ProductRatingProps = {
    rating: number;
    size?: number;
    raters?: number;
};

export default function ProductRating(props: ProductRatingProps) {
    const { rating, size = 34, raters } = props;

    const style = { '--rating': rating, '--star-size': `${size}px` } as React.CSSProperties;
    const spanStyle = { fontSize: `${size * 0.55}px`, marginInlineEnd: '0.4em' } as React.CSSProperties;
    return (
        <div className={styles.container}>
            <div className={styles.stars} style={style} aria-label={`Rating ${rating} out of 5.`}></div>
            <div style={spanStyle} aria-hidden={true}>{`${rating} / 5`}</div>
            {raters ? (
                <div style={spanStyle} aria-label={`Rated by ${raters} customers`}>
                    ({raters})
                </div>
            ) : null}
        </div>
    );
}
