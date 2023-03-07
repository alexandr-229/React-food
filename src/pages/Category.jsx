import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredByCategory } from '../api';
import { Preloader } from '../component/Preloader';
import { MealList } from './MealList';

export const Category = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredByCategory(name).then((data) => {
            setMeals(data.meals);
        });
    }, [name]);

    return <>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</>;
};
