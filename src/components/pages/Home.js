import React, { Fragment } from 'react';
import Search from '../users/Search';
import DrinksList from '../users/DrinksList';

const Home = () => (
    <Fragment>
        <Search />
        <DrinksList />
    </Fragment>
);

export default Home
