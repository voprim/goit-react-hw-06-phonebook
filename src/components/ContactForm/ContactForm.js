import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

export function ContactForm() {
  const [name, setContactName] = useState('');
  const [number, setContactNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setContactName('');
    setContactNumber('');
  };
  const handleChangeName = e => {
    if (e.target.type === 'text') {
      setContactName(e.target.value);
    }
  };
  const handleChangeNumber = e => {
    if (e.target.type === 'tel') {
      setContactNumber(e.target.value);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          placeholder="Orest Orestovich"
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          placeholder="123-45-67"
        />
      </label>
      <button className={css.btn} type="submit" onSubmit={handleSubmit}>
        Add contact
      </button>
    </form>
  );
}
