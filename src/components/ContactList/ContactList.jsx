import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

import css from './ContactList.module.css';

const getContacts = state => state.contacts.contacts;
const getFilter = state => state.filter.filter;

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = getFilteredContacts();

  return (
    <ul className={css.list}>
      {filterContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
