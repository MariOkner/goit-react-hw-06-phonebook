import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { Container, TitlePhonebook, TitleContacts } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <TitlePhonebook title="Phonebook">Phonebook</TitlePhonebook>
      <ContactForm />

      <TitleContacts title="Contacts">Contacts</TitleContacts>
      {contacts.length === 0 ? null : <Filter />}
      {contacts.length === 0 ? null : <ContactList />}
      <ToastContainer />
    </Container>
  );
};
