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
            toast.success("Contact deleted successfully!", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                style: {
                    backgroundColor: "#4a4a4a",
                    color: "#fff"
                }
            });
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
                        <EditButton 
                            onClick={() => {
                                setSelectedContact(contact);
                                onOpen();
                            }}
                        >
                            <RiEditCircleLine size={25} />
                            <span>Edit</span>
                        </EditButton>
                        <DeleteButton onClick={() => deleteContact(contact.id)}>
                            <IoMdTrash size={25} />
                            <span>Delete</span>
                        </DeleteButton>
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
    padding: 1.5rem;
    margin: 1rem 2rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 640px) {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
        margin: 1rem;
    }
`

const ContactInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`

const IconContainer = styled.div`
    background: rgba(226, 158, 74, 0.2);
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
        background: rgba(226, 158, 74, 0.3);
    }
`

const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.h3`
    font-size: 1.5rem;
    color: #fff;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

const Email = styled.p`
    margin: 0.2rem 0 0 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
`

const ActionButtons = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;

    @media (max-width: 640px) {
        justify-content: center;
    }
`

const ButtonBase = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    
    span {
        display: none;
    }

    &:hover {
        transform: scale(1.05);
        span {
            display: inline;
        }
    }

    svg {
        transition: transform 0.3s ease;
    }

    &:hover svg {
        transform: scale(1.1);
    }
`

const EditButton = styled(ButtonBase)`
    background-color: rgba(74, 144, 226, 0.2);
    color: #4A90E2;

    &:hover {
        background-color: rgba(74, 144, 226, 0.3);
    }
`

const DeleteButton = styled(ButtonBase)`
    background-color: rgba(244, 67, 54, 0.2);
    color: #f44336;

    &:hover {
        background-color: rgba(244, 67, 54, 0.3);
    }
`