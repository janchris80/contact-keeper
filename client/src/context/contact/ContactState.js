import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CURRENT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from '../types';
import ContactReducer from './ContactReducer';
import ContactContext from './ContactContext';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jan Chris',
        email: 'jan@gmail.com',
        phone: '123-123-1234',
        type: 'personal',
      },
      {
        id: 1,
        name: 'Jan Chris',
        email: 'jan@gmail.com',
        phone: '111-222-3333',
        type: 'personal',
      },
      {
        id: 1,
        name: 'Jan Chris',
        email: 'jan@gmail.com',
        phone: '123-456-7890',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contac/

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;