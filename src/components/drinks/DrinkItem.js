import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DrinkItem = ({ drink: {strDrinkThumb, strDrink, idDrink} }) => {


        return (
            <div className="card card-drink text-center">
               <img src={strDrinkThumb} alt="logo" className="round-img" style={{width: '80%'}} /> 
               <h2>{strDrink}</h2>
               <div>
                   <Link to={`/drink/${idDrink}`} className="btn btn-primary btn-sm my-1">More</Link>
               </div>
            </div>
        );
    
}

DrinkItem.propTypes = {
    drink: PropTypes.object.isRequired
};

export default DrinkItem;
