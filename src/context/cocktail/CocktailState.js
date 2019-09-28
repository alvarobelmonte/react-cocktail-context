import React, { useReducer} from 'react';
import axios from 'axios';
import CokctailContext from './cocktailContext';
import CocktailReducer from './cocktailReducer';
import {
    SEARCH_DRINKS,
     GET_DRINK,
     CLEAR_DRINKS,
     GET_INGREDIENTS,
     CLEAR_INGREDIENTS,
     SET_LOADING
} from '../types';


const CocktailState = props => {
    const initialState = {
        drinks: [],
        drink: {},
        ingredients: [],
        loading: false
    }

    const [state, dispatch] = useReducer(CocktailReducer, initialState);

    //Search Drinks
    const searchDrinks = async name => {
        setLoading();
    
        const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name); 

        dispatch({
            type: SEARCH_DRINKS,
            payload: res.data.drinks
        });
      };

    //Get Drink
    const getDrink = async (idDrink) => {
        setLoading();

        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`); 

        dispatch({
            type: GET_DRINK,
            payload: res.data.drinks[0]
        });

        const drinkData = res.data.drinks[0];

        const {
            strIngredient1, strIngredient2, strIngredient3, strIngredient4,
            strIngredient5, strIngredient6, strIngredient7, strIngredient8,
            strIngredient9, strIngredient10, strIngredient11, strIngredient12,
            strIngredient13, strIngredient14, strIngredient15} = drinkData;

        const ingredientsList = [strIngredient1, strIngredient2, strIngredient3, strIngredient4,
            strIngredient5, strIngredient6, strIngredient7, strIngredient8,
            strIngredient9, strIngredient10, strIngredient11, strIngredient12,
            strIngredient13, strIngredient14, strIngredient15].filter((i) => {
                return i !== '';
            });
        getDrinkIngredients(ingredientsList);
    }

    //Get ingredients
    const getDrinkIngredients =  (ingredients) => {
        setLoading();
        dispatch({
            type: CLEAR_INGREDIENTS
        });

        ingredients.map( ingredientName => {
            if (ingredientName) {
                return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`)
                .then(res => {
                    dispatch({
                        type: GET_INGREDIENTS,
                        payload: res.data.ingredients[0]
                    });
                }); 
            }
            return 0;
        });

    }

    //Clear Drinks
    const clearDrinks = () => dispatch({ type: CLEAR_DRINKS });

    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <CokctailContext.Provider
    value={{
        drinks: state.drinks,
        drink: state.drink,
        ingredients: state.ingredients,
        loading: state.loading,
        searchDrinks,
        clearDrinks,
        getDrink,
        getDrinkIngredients
    }}>
        {props.children}
    </CokctailContext.Provider>
}

export default CocktailState;