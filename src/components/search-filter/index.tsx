interface SearchFilterProps {
    searchTerm: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchFilter(props: SearchFilterProps) {
    const { searchTerm, handleSearch } = props;
    return (
        <div>
            <input type='search' onChange={handleSearch} value={searchTerm} />
        </div>
    );
}
