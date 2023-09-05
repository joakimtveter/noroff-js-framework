import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { getAllProducts } from '@/api';

import Layout from '../components/layout';
import { Product } from '../types/product';
import ProductCard from '../components/product-card';
import LoadingSpinner from '@/components/loading-spinner';
import ContentWrapper from '@/components/content-wrapper';
import SearchFilter from '@/components/search-filter';

import styles from './homePage.module.css';

function Homepage() {
    const [data, setData] = useState<Array<Product>>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<Array<Product>>([]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
        if (searchTerm === '') {
            setFilteredProducts(data);
            return;
        }
        setFilteredProducts(
            data.filter((product) => {
                // Check if the product title, description or tags includes the search term
                // Only if the search term is a full tag string, will it be included.
                if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) return true;
                if (product.description.toLowerCase().includes(searchTerm.toLowerCase())) return true;
                if (product.tags.includes(searchTerm.toLowerCase())) return true;
                return false;
            })
        );
    };

    const getProducts = async () => {
        const products = await getAllProducts();
        setData(products);
        setFilteredProducts(products);
    };

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <>
            <Helmet>
                <title>MyShop</title>
                <meta name='description' content='A Fictional Store for my School project' />
                <meta name='keywords' content='Webshop, Noroff' />
            </Helmet>
            <Layout>
                <ContentWrapper>
                    {data.length === 0 ? (
                        <LoadingSpinner />
                    ) : (
                        <>
                            <hgroup>
                                <h1 className=''>Welcome to MyShop</h1>
                                <p>
                                    We hope you find what you are looking for. Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Asperiores natus, dolor error minus ipsa velit?
                                </p>
                            </hgroup>
                            <SearchFilter searchTerm={searchTerm} handleSearch={handleSearch} />
                            <ul className={styles.products}>
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} {...product} />
                                ))}
                            </ul>
                        </>
                    )}
                </ContentWrapper>
            </Layout>
        </>
    );
}

export default Homepage;
