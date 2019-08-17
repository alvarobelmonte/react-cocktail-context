import {
    SEARCH_DRINKS,
    GET_DRINK,
    CLEAR_DRINKS,
    GET_INGREDIENTS,
    CLEAR_INGREDIENTS,
    SET_LOADING
} from '../types';


export default (state, action) => {
    switch(action.type) {
        case SEARCH_DRINKS:
            return {
                ...state,
                drinks: action.payload,
                loading: false
            }
        case CLEAR_DRINKS:
            return {
                ...state,
                drinks: [],
                loading: false
            }
        case GET_DRINK:
            return {
                ...state,
                drink: action.payload,
                loading: false
            }
        case GET_INGREDIENTS:
            return {
                ...state,
                ingredients: state.ingredients.concat(action.payload),
                loading: false 
            }
        case CLEAR_INGREDIENTS:
            return {
                ...state,
                ingredients: [],
            }    
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
};
