import React, { useState } from 'react'
import styled from 'styled-components'
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from "../config/firebase";
import useDisclosure from '../hooks/useDisclosure'
import AddAndUpdateContact from './AddAndUpdateContact';
import { toast } from 'react-toastify';

const ContactCard = ({ contacts }) => {
    const [selectedContact, setSelectedContact] = useState(null);
    const { isOpen, onClose, onOpen } = useDisclosure();

    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contact", id));
            toast.success("Contact deleted successfully!");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {contacts.map((contact) => (
                <CardContainer key={contact.id}>
                    <ContactInfo>
                        <IconContainer>
                            <HiOutlineUserCircle size={40} color="#e29e4a" />
                        </IconContainer>
                        <ContactDetails>
                            <Name>{contact.name}</Name>
                            <Email>{contact.email}</Email>
                        </ContactDetails>
                    </ContactInfo>
                    <ActionButtons>
                        <RiEditCircleLine 
                            onClick={() => {
                                setSelectedContact(contact);
                                onOpen();
                            }} 
                            size={20} 
                            color="#4A90E2" 
                            cursor="pointer" 
                        />
                        <IoMdTrash onClick={() => deleteContact(contact.id)} size={20} color="#f44336" cursor="pointer" />
                    </ActionButtons>
                </CardContainer>
            ))}
            <AddAndUpdateContact 
                isUpdate={true} 
                isOpen={isOpen} 
                onClose={onClose} 
                contact={selectedContact}
            />
        </div>
    )
}

export default ContactCard

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: 0.5rem 2rem;
    background-color: #FFEAAE;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transform: translateY(-2px);
    }
`

const ContactInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.h3`
    margin: 0;
    font-size: 1.5rem;
    color: #333;
`

const Email = styled.p`
    margin: 0.2rem 0 0 0;
    font-size: 0.9rem;
    color: #666;
`

const ActionButtons = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    & > svg {
        transition: transform 0.2s ease;
        &:hover {
            transform: scale(1.1);
        }
    }
`