import SearchIcon from '@/icons/search';
import FilterIcon from '@/icons/filter';
import styles from './search-filter.module.css';

interface SearchFilterProps {
    searchTerm: string;
    results: number;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchFilter(props: SearchFilterProps) {
    const { searchTerm, results = 0, handleSearch } = props;
    return (
        <div className={styles.search}>
            <FilterIcon size={1.5} color='white' />
            <div className={styles.container}>
                <input
                    className={styles.input}
                    type='search'
                    onChange={handleSearch}
                    value={searchTerm}
                    placeholder={'Search to filter products...'}
                />
                <SearchIcon size={2} />
            </div>
            <p aria-live='polite'>{results} products</p>
        </div>
    );
}
