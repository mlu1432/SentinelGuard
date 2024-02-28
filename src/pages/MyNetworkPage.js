import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, remove, push, off } from 'firebase/database';
import NavBar from '../components/NavBar';
import BottomNav from '../components/BottomNav';
import MyNetworkIconComponent from '../components/icons/MyNetworkIconComponent';
import Alerts from '../components/Alerts';
import '../styles/MyNetworkPage.css';
 

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const MyNetworkPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const contactsRef = ref(database, 'contacts');
    const onValueCallback = (snapshot) => {
      const data = snapshot.val();
      const contactsList = data ? Object.keys(data).map(key => ({
          id: key,
          ...data[key]
      })) : [];
      setContacts(contactsList);
    };
    onValue(contactsRef, onValueCallback);

    // Unsubscribe from onValue listener when the component unmounts
    return () => {
      off(contactsRef, 'value', onValueCallback);
    };
  }, []);

  const addContact = async (newContact) => {
    const newContactRef = ref(database, 'contacts');
    const newContactKey = push(newContactRef).key;
    await set(ref(database, 'contacts/' + newContactKey), newContact);
  };

  const removeContact = async (contactId) => {
    const contactRef = ref(database, `contacts/${contactId}`);
    await remove(contactRef);
  };

  return (
    <div className="my-network-page">
      <NavBar />
      <div className="icon-container">
        <MyNetworkIconComponent />
      </div>
      <Alerts />
      <h1>My Network</h1>
      <div className="contacts-list">
        {contacts.map(contact => (
          <div key={contact.id} className="contact-item">
            {contact.name}
            <button onClick={() => removeContact(contact.id)}>Remove</button>
          </div>
        ))}
        {/* Add UI component to add new contacts */}
      </div>
      <BottomNav />
    </div>
  );
};

export default MyNetworkPage;