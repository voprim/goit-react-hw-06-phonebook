import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { getContacts, deleteContact } from 'redux/contactsSlice';
//import { getContacts } from 'redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filtersSlice';
//import { getFilter } from 'redux/store';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const onFilterChange = () => {
    return contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDeleteContact = e => {
    dispatch(deleteContact(e.currentTarget.id));
  };

  return (
    <ul className={css.list}>
      {onFilterChange().map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.info}>
            {name}: {number}
          </p>
          <button className={css.btn} type="button" onClick={onDeleteContact}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
