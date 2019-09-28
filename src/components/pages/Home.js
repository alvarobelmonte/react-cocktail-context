import React, { Fragment } from 'react';
import Search from '../drinks/Search';
import DrinksList from '../drinks/DrinksList';

const Home = () => (
    <Fragment>
        <Search />
        <DrinksList />
    </Fragment>
);

export default Home
