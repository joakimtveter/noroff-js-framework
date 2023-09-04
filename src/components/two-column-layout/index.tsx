import styles from './two-column-layout.module.css';

export default function TwoColumnLayout({ children }: { children: React.ReactNode }) {
    return <div className={styles.twoColumns}>{children}</div>;
}
