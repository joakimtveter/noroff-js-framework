import { Link } from 'react-router-dom';
import Navigation from '@/components/navigation';
import CartIcon from '@/components/cart-icon';

import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.branding}>
                    <Link to={'/'}>MyStore</Link>
                </div>
                <nav>
                    <Navigation>
                        <Link to={'/'}>Products</Link>
                        <Link to={'/contact'}>Contact us</Link>
                        <CartIcon />
                    </Navigation>
                </nav>
            </div>
        </header>
    );
}
