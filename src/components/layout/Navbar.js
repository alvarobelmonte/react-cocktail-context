import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = props => {

    return (
        <nav className="navbar bg-primary">      
            <Link to='/'>
                <h1>
                    <i className={props.icon} />
                    <span>{' ' + props.title}</span>
                </h1>
            </Link>
            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'React Cocktail',
    icon: 'fas fa-cocktail'
};

Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Navbar;
