import React, { useContext } from 'react';
import DrinkItem from './DrinkItem';
import Spinner from '../layout/Spinner';
import CocktailContext from '../../context/cocktail/cocktailContext';


const DrinksList = () => {

    const cocktailContext = useContext(CocktailContext);

    const { loading, drinks } = cocktailContext;

    if (loading) {
       return <Spinner />;
    }
    else {
        if(drinks) {
            return (
                <div style={drinkStyle}>
                    {drinks.length > 0 && drinks.map(drink => {
                        return <DrinkItem key={drink.idDrink} drink={drink} />
                    })}
                </div>
            );
        }
        else {
            return (
                <div>
                {drinks && <h2>No cocktails found</h2>}
                </div>
            );
        }

    }
}

const drinkStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '1rem',
    marginTop: '2rem'
};

export default DrinksList;
