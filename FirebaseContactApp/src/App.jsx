import React from 'react'
import Nav from './components/Nav'
import './App.css'
import Search from './components/search'
import { useState, useEffect } from 'react'
import {db} from './config/firebase'
import {collection, getDocs} from 'firebase/firestore'
import ContactCard from './components/ContactCard'
import Modal from './components/Modal'
import AddAndUpdateContact from './components/AddAndUpdateContact'

const App = () => {

  const [contacts, setContacts]=useState([]);
  const [isOpen, setIsOpen]=useState(false);

  const onOpen=()=>{
    setIsOpen(true);
  }

  const onClose=()=>{
    setIsOpen(false);
  }

  useEffect(()=>{
    const getContacts=async ()=>{
      try{
        const contactsRef=collection(db, "contact");
        const contactSnapshot=await getDocs(contactsRef);
        console.log(contactSnapshot);
        const contactList=contactSnapshot.docs.map((doc)=>{
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setContacts(contactList);
        console.log(contactList); 
      }catch(error){
        console.log(error);
      }
    }

    getContacts();
  }, [])
  return (
    <div>
      <Nav />
      <Search onOpen={onOpen}/>
      <ContactCard contacts={contacts}/>
      <Modal isOpen={isOpen} onClose={onClose} >
        Hello!
      </Modal>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
    </div>

  )
}

export default App