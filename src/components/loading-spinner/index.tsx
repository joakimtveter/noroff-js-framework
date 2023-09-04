import styles from './loading-spinner.module.css';

export default function LoadingSpinner() {
    return (
        <div className={styles.container}>
            <div className={styles.spinner} />
            <div className='visually-hidden'>loading</div>
        </div>
    );
}
