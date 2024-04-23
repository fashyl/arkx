import { useState, useEffect } from 'react';
import { PageLoader } from './PageLoader';
import { addToPhonebook, deletePhoneBookEntries, editPhoneBookEntries, getPhonebookEntries } from '../services/phonebook';
import Contact from '../components/Contact';

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', number: '' });
  const [editContactId, setEditContactId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      setIsLoading(true);
      try {
        const response = await getPhonebookEntries();
        setContacts(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const addContact = async (contact) => {
    try {
      const response = await addToPhonebook(contact.name, contact.number);
      setContacts([...contacts, response.data]);
      setNewContact({ name: '', number: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (contact) => {
    try {
      const response = await editPhoneBookEntries(editContactId, contact.name, contact.number); 
      const updatedContacts = contacts.map((c) => (c._id === editContactId ? response.data : c));
      setContacts(updatedContacts);
      setEditContactId(null);
      setNewContact({ name: '', number: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await deletePhoneBookEntries(id);
      const updatedContacts = contacts.filter((c) => c._id !== id);
      setContacts(updatedContacts);
    } catch (error) {
      console.error(error);
    } 
  };

  const handleNewContactChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleEditContact = (id) => {
    setEditContactId(id);
    const contactToEdit = contacts.find((c) => c._id === id);
    setNewContact(contactToEdit);
  };

  const handleAddContact = async (e) => {
    e.preventDefault();
    await addContact(newContact);
  };

  const handleUpdateContact = async (e) => {
    e.preventDefault();
    await updateContact(newContact);
  };

  const handleDeleteContact = async (id) => {
    await deleteContact(id);
  };

  if(isLoading) {
    return <PageLoader />
  }

  return (
    <div className="phonebook">
      <form onSubmit={editContactId ? handleUpdateContact : handleAddContact}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newContact.name}
          onChange={handleNewContactChange}
          required
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          value={newContact.number}
          onChange={handleNewContactChange}
          required
        />
        <button type="submit">{editContactId ? 'Update' : 'Add Contact'}</button>
      </form>
      <div className="contacts">
        {contacts.map((contact) => (
          <Contact
            key={contact._id}
            name={contact.name}
            phone={contact.number}
            onEdit={() => handleEditContact(contact._id)}
            onDelete={() => handleDeleteContact(contact._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Phonebook;
