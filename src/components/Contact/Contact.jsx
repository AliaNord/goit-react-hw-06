import s from'./Contact.module.css'

const Contact = ({ id, name, number, handleDeleteContact }) => {
  return (
    <li className={s.li}>
      <div>
        <p>{name}</p>
        <a href="">{number}</a>
      </div>
      <button className={s.button} onClick={() => handleDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default Contact;
