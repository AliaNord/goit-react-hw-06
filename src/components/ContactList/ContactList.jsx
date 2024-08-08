import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/contactsSlice";
import { selectFilter } from "../../redux/filter/selectors";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={s.ul}>
      {filteredData.map((item) => (
        <li className={s.li} key={item.id}>
          <div>
            <p>{item.name}</p>
            <a href="">{item.number}</a>
          </div>
          <button
            className={s.button}
            onClick={() => dispatch(deleteContact(item.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
