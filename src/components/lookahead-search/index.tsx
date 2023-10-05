import { useState } from 'react';
import type { Product } from '@/types/product';

import styles from './lookahead-search.module.css';
import { Link } from 'react-router-dom';

type LookaheadSearchProps = {
    products: Product[];
};

export default function LookaheadSearch(props: LookaheadSearchProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(props.products);
    const filterProducts = (searchTerm: string) => {
        if (searchTerm === '') {
            setFilteredProducts(props.products);
            return;
        }
        setFilteredProducts(
            props.products.filter((product) => {
                if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) return true;
                return false;
            })
        );
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const term = e.target.value;
        setSearchTerm(term);
        filterProducts(term);
    };
    return (
        <div className={styles.component}>
            <input
                className={styles.input}
                type='text'
                placeholder='Search...'
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul className={styles.list}>
                {filteredProducts.map((product) => (
                    <li key={product.id} className={styles.item}>
                        <Link className={styles.link} to={`/product/${product.id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
