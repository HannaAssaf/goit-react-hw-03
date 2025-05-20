import { useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import css from "./App.module.css";
import inicialContacts from "../data/contacts.json";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(inicialContacts);
  const [inputValue, setInputValue] = useState("");
  const [debouncedInputValue] = useDebounce(inputValue, 300);

  const contactsFilter = useMemo(() => {
    // if (!debouncedInputValue.trim()) return contacts;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(debouncedInputValue.toLowerCase())
    );
  }, [debouncedInputValue, contacts]);

  const handleDelete = (id) =>
    setContacts((prev) => prev.filter((c) => c.id !== id));

  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox text={inputValue} onChange={setInputValue} />
        <ContactList contacts={contactsFilter} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
