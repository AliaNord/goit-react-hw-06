import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
// import { useEffect, useState } from "react";

const App = () => {

  return (
    <>
      <h1>Phone book</h1>
      <ContactForm />
      <SearchBox
      />
      <ContactList
      />
    </>
  );
};

export default App;


// const App = () => {
//   const [contacts, setContacts] = useState(() => {
//     const savedContacts = JSON.parse(localStorage.getItem("contacts"));
//     return (
//       savedContacts ?? [
//         { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//         { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//         { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//         { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//       ]
//     );
//   });
//   const [searchBoxValue, setSearchBoxValue] = useState("");

//   const handleChangeInput = (e) => {
//     const newSearchBoxValue = e.target.value;
//     setSearchBoxValue(newSearchBoxValue);
//   };

//   const searching = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(searchBoxValue.toLowerCase())
//   );

//   const handleNewContact = (newContactNameValue, newContactNumberValue) => {
//     const newContact = {
//       id: new Date().getTime(),
//       name: newContactNameValue,
//       number: newContactNumberValue,
//     };
//     setContacts((prev) => [...prev, newContact]);
//   };

//   const handleDeleteContact = (id) => {
//     setContacts((prev) => prev.filter((item) => item.id !== id));
//   };
//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <>
//       <h1>Phone book</h1>
//       <ContactForm handleNewContact={handleNewContact} />
//       <SearchBox
//         handleChangeInput={handleChangeInput}
//         searchBoxValue={searchBoxValue}
//       />
//       <ContactList
//         contacts={searching}
//         handleDeleteContact={handleDeleteContact}
//       />
//     </>
//   );
// };