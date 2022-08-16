import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllCategories } from '../api';
import { Preloader } from '../component/Preloader';
import { CategoryList } from './CategoryList';
import { Search } from '../component/Search';

export const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );

        setSearchParams({ search: str });
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            const value = searchParams.get('search');
            if (value !== null && value !== '') {
                setFilteredCatalog(
                    data.categories.filter((item) =>
                        item.strCategory
                            .toLowerCase()
                            .includes(value.toLowerCase())
                    )
                );
            } else {
                setFilteredCatalog(data.categories);
            }
        });
    }, [searchParams]);

    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
};
