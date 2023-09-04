import styles from './content-wrapper.module.css';

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
    return <div className={styles.wrapper}>{children}</div>;
}
