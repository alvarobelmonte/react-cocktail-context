import React, { useState, useContext } from 'react';
import CocktailContext from '../../context/cocktail/cocktailContext';
import AlertContext from '../../context/alert/alertContext';
import Alert from '../layout/Alert';

const Search = () => {
    
    const cocktailContext = useContext(CocktailContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alertContext.setAlert('Please enter the name of a drink', 'danger');
        }
        else {
            cocktailContext.searchDrinks(text);
            setText('');
        }
    };

    return (
        <div>
            <Alert />
            <form className="form" onSubmit={onSubmit} >
                <input type="text" name="text" placeholder="Search drinks..." 
                        value={text} onChange={onChange} />
                <input type="submit" value="Search" className="btn btn-primary btn-block"/>
            </form>
            { cocktailContext.drinks && cocktailContext.drinks.length > 0 && 
              <button className="btn btn-light btn-block" onClick={cocktailContext.clearDrinks}>Clear</button> }
            
        </div>
    );
     
}

export default Search
