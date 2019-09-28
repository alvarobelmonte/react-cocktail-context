import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import DrinkProfile from './components/drinks/DrinkProfile';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import CocktailState from './context/cocktail/CocktailState';
import AlertState from './context/alert/AlertState';

const App = () => {

  return (
    <CocktailState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="React Cocktail" icon="fas fa-cocktail" />
            <div className="container">
          
              
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/drink/:idDrink" component={DrinkProfile} />
                <Route component={NotFound} />
              </Switch>

            </div>
          </div>
        </Router>
      </AlertState>
    </CocktailState>
  );

}

export default App;
