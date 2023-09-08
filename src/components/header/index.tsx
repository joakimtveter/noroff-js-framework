import { NavLink } from 'react-router-dom';
import Navigation from '@/components/navigation';
import CartIcon from '@/components/cart-icon';

import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.branding}>
                    <NavLink to={'/'}>MyStore</NavLink>
                </div>
                <nav>
                    <Navigation>
                        <li>
                            <NavLink to={'/'} className={styles.link}>
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={styles.link} to={'/contact'}>
                                Contact us
                            </NavLink>
                        </li>
                        <li>
                            <CartIcon />
                        </li>
                    </Navigation>
                </nav>
            </div>
        </header>
    );
}
