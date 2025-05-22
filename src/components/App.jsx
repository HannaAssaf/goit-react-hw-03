import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import css from "./App.module.css";
import inicialContacts from "../data/contacts.json";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : inicialContacts;
  });
  const [inputValue, setInputValue] = useState("");
  const [debouncedInputValue] = useDebounce(inputValue, 300);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = ({ username, tel }) => {
    const contact = {
      id: nanoid(),
      name: username.trim(),
      number: tel,
    };
    setContacts((prev) => [...prev, contact]);
  };
  const contactsFilter = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(debouncedInputValue.toLowerCase())
    );
  }, [debouncedInputValue, contacts]);

  const handleDelete = (contactId) => {
    setContacts((prev) => {
      return prev.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <>
      <div className={css.root}>
        <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={addNewContact} />
          <SearchBox text={inputValue} onChange={setInputValue} />
          <ContactList contacts={contactsFilter} onDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default App;
