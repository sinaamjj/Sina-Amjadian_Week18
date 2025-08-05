import { createContext, useState } from "react";
import { v4 } from "uuid";

export const Context = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [alert, setAlert] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const changeSearchHandler = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const addHandler = (values) => {
    console.log("در حال افزودن مخاطب جدید:", values); // 👈 تست لاگ

    const newContact = { ...values, id: v4() };
    setContacts([...contacts, newContact]);

    setContact({ name: "", lastName: "", email: "", phone: "" });
    setAlert("");
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((c) => c.id !== id);
    setContacts(newContacts);
  };

  const editHandler = (id) => {
    const contactToEdit = contacts.find((c) => c.id === id);
    if (!contactToEdit) return;

    setContact(contactToEdit);
    setIsEditing(true);
    setEditId(id);
  };

  const editSubmitHandler = (values) => {
    const updatedContacts = contacts.map((c) =>
      c.id === editId ? { ...values, id: editId } : c
    );

    setContacts(updatedContacts);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });

    setIsEditing(false);
    setEditId(null);
    setAlert("");
  };

  const filteredContacts = contacts.filter((c) => {
    const fullText = `${c.name} ${c.lastName} ${c.email}`.toLowerCase();
    return fullText.includes(searchTerm);
  });

  return (
    <Context.Provider
      value={{
        contacts,
        contact,
        alert,
        changeHandler,
        addHandler,
        deleteHandler,
        editHandler,
        isEditing,
        editSubmitHandler,
        filteredContacts,
        searchTerm,
        changeSearchHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};
