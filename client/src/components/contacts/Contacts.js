import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';
import { useEffect } from 'react';
import Spinner from '../layout/Spinner';

const Contacts = (props) => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
  }, []);

  if (contacts && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts && !loading ? (
        filtered ? (
          filtered.map((contact, index) => (
            <ContactItem contact={contact} key={index} />
          ))
        ) : (
          contacts.map((contact, index) => (
            <ContactItem contact={contact} key={index} />
          ))
        )
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

Contacts.propTypes = {};

export default Contacts;
