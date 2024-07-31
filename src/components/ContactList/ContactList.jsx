import Contacts from "../Contact/Contact";
import s from'./ContactList.module.css'

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={s.ul}>
      {contacts.map((item) => (
        <Contacts
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
1