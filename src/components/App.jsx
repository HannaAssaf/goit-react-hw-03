import { useState } from "react";
import css from "./App.module.css";
import contactsBase from "../data/contacts.json";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(contactsBase);

  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
