import { useDispatch } from 'react-redux';
import css from './ContactListItem.module.css';
import { deleteContact } from '../../redux/contactSlice';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.item} key={contact.id}>
      {contact.name}: {contact.number}
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};
