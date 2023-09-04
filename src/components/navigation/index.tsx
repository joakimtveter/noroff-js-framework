import styles from './navigation.module.css';

interface NavigationProps {
    children: React.ReactNode;
    menuName?: string;
}

export default function Navigation(props: NavigationProps) {
    const { children, menuName = 'main' } = props;

    return (
        <nav className={styles.nav} aria-label={menuName}>
            <ul className={styles.list}>{children}</ul>
        </nav>
    );
}
