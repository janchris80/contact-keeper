import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';

const Contacts = (props) => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  return contacts.length !== 0 ? (
    <Fragment>
      {filtered
        ? filtered.map((contact, index) => (
            <ContactItem contact={contact} key={index} />
          ))
        : contacts.map((contact, index) => (
            <ContactItem contact={contact} key={index} />
          ))}
    </Fragment>
  ) : (
    <h4>Please add a contact</h4>
  );
};

Contacts.propTypes = {};

export default Contacts;
