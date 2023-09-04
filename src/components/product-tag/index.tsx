import styles from './product-tag.module.css';

export default function ProductTag({ children }: { children: React.ReactNode }) {
    return <li className={styles.tag}>{children}</li>;
}
