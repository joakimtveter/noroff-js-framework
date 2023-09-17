import SearchIcon from '@/icons/search';
import styles from './search-filter.module.css';

interface SearchFilterProps {
    searchTerm: string;
    results: number;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchFilter(props: SearchFilterProps) {
    const { searchTerm, handleSearch, results = 0 } = props;
    return (
        <div className={styles.search}>
            <div className={styles.container}>
                <input
                    className={styles.input}
                    type='search'
                    onChange={handleSearch}
                    value={searchTerm}
                    placeholder={'Search for product...'}
                />
                <SearchIcon size={2} />
            </div>
            <p aria-live='polite'>{results} products</p>
        </div>
    );
}
