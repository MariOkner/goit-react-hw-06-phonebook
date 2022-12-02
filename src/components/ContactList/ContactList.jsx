import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';

import { ListContact, ContactItem, ContactDelete } from './ContactList.styled';

export const ContactList = ({ filter, onDelete }) => {
  const contacts = useSelector(getContacts);
  const visibleContacts = contacts => {
    return contacts;
  };

  return (
    <ListContact>
      {contacts
        .filter(({ name }) => {
          return name.toLowerCase().includes(filter.toLowerCase());
        })
        .map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}
            <ContactDelete id={id} onClick={() => onDelete(id)}>
              Delete
            </ContactDelete>
          </ContactItem>
        ))}
    </ListContact>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
