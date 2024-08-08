import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsSlice";

import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.li}>
      <div>
        <p>{name}</p>
        <a href="">{number}</a>
      </div>
      <button className={s.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
