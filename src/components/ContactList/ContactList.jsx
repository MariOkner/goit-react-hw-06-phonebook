import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

import {
  ContactListHTML,
  ContactItemHTML,
  ContactDeleteHTML,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <ContactListHTML>
      {contacts
        .filter(({ name }) => {
          return name.toLowerCase().includes(filter.toLowerCase());
        })
        .map(({ id, name, number }) => (
          <ContactItemHTML key={id}>
            {name}: {number}
            <ContactDeleteHTML
              id={id}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </ContactDeleteHTML>
          </ContactItemHTML>
        ))}
    </ContactListHTML>
  );
};
