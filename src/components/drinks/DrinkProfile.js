import React, { useEffect, useContext, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import CocktailContext from '../../context/cocktail/cocktailContext';

const DrinkProfile =({match}) => {

    const cocktailContext = useContext(CocktailContext);

    const { drink, ingredients, loading, getDrink } = cocktailContext;

    const  {strDrink, 
            strInstructions, 
            strDrinkThumb, 
            strCategory, 
            strIBA, 
            strAlcoholic, 
            strGlass, 
            strVideo} = drink;


    useEffect(() => {
        getDrink(match.params.idDrink);
        //eslint-disable-next-line
    }, []); // [] is like componentDidMount

    if (loading) return <Spinner />
    else
        return (
            <Fragment>

                <Link to="/" className="btn btn-primary">Back</Link>

                <div className="card card-profile">

                    <div className="all-center">
                        <img src={strDrinkThumb} alt="thumb" className="round-img" style={{width: '20%'}}/>
                        <h1>{strDrink}</h1>
                        <p>{strInstructions}</p>
                    </div>

                    <div>
                        {strVideo && <a href={strVideo} className="btn btn-primary btn-sm my-1" >Video</a>}
                    </div>
                </div>
                <div className="card card-profile bg-light text-center">
                    {strCategory && <div className="badge badge-primary">{strCategory}</div>}
                    {strIBA && <div className="badge badge-success">{strIBA}</div>}
                    {strAlcoholic && <div className="badge badge-danger">{strAlcoholic}</div>}
                    {strGlass && <div className="badge badge-dark"> {strGlass}</div>}
                </div>
                <div className="card card-profile card-ingredients bg-light">
                     <h1 className="text-center">Ingredients</h1>
                     {ingredients.length > 0 && ingredients.map((ingredient, key) => {
                         return <Fragment key={key}>
                             <div className="badge badge-dark badge-title">{ingredient.strIngredient}</div>
                             <h3 className="text-center">{ingredient.strType}</h3>
                             <p>{ingredient.strDescription}</p>
                             </Fragment>
                    })}
                </div> 
            </Fragment>
        );
    
}

export default DrinkProfile;
