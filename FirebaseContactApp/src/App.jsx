import React from 'react'
import Nav from './components/Nav'
import './App.css'
import Search from './components/search'
import { useState, useEffect } from 'react'
import {db} from './config/firebase'
import {collection, getDocs, onSnapshot} from 'firebase/firestore'
import ContactCard from './components/ContactCard'
import AddAndUpdateContact from './components/AddAndUpdateContact'
import useDisclosure from './hooks/useDisclosure'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

  const [contacts, setContacts]=useState([]);
  const {isOpen, onClose, onOpen}=useDisclosure();

  useEffect(()=>{
    const getContacts=async ()=>{
      try{
        const contactsRef=collection(db, "contact");
        const contactSnapshot=await getDocs(contactsRef);

        onSnapshot(contactsRef, (snapshot)=>{
          console.log(contactSnapshot);
          const contactList=snapshot.docs.map((doc)=>{
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          setContacts(contactList);
          console.log(contactList); 
          return contactList;
        })

      }catch(error){
        console.log(error);
      }
    }

    getContacts();
  }, [])

  const filteredContacts=(e)=>{
    const value=e.target.value;

    const contactsRef=collection(db, "contact");

    onSnapshot(contactsRef, (snapshot)=>{
      // console.log(contactSnapshot);
      const contactList=snapshot.docs.map((doc)=>{
        return {
          id: doc.id,
          ...doc.data()
        }
      })

      const filteredContact=contactList.filter((contact)=>{
        contact.name.toLowerCase().includes(value.toLowerCase()) || contact.email.toLowerCase().includes(value.toLowerCase())
      })
      setContacts(filteredContact);
      // console.log(contactList); 
      return filteredContacts;
    })
  }
  return (
    <div>
      <Nav />
      <Search onOpen={onOpen} />
      <ContactCard contacts={contacts}/>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer 
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"      
      />
    </div>

  )
}

export default App