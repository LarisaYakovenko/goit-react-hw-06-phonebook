import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

import css from './ContactList.module.css';

const getContacts = state => state.contacts;
const getFilter = state => state.filter;

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = getFilteredContacts();
  // const addContact = contact => {
  //   dispatch(addContact(contact));
  // };

  return (
    <ul className={css.list}>
      {filterContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          // onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

// export const ContactList = ({ filterContacts, onDeleteContact }) => {
//   return (
//     <ul className={css.list}>
//       {filterContacts.map(contact => (
//         <ContactListItem
//           key={contact.id}
//           contact={contact}
//           onDeleteContact={onDeleteContact}
//         />
//       ))}
//     </ul>
//   );
// };