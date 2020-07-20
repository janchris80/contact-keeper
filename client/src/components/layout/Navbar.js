import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';

const Navbar = (props) => {
  const { title, icon } = props;
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = () => {
    return (
      <Fragment>
        <li>Hello {user && user.name}</li>
        <li>
          <a href='#!'>
            <i className='fas fa-sign-out-alt'>
              <span className='hide-sm' onClick={onLogout}>
                Logout
              </span>
            </i>
          </a>
        </li>
      </Fragment>
    );
  };

  const guestLinks = () => {
    return (
      <Fragment>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </Fragment>
    );
  };

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>{isAuthenticated ? authLinks() : guestLinks()}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;
