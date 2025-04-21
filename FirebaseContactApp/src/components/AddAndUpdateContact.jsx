import React from 'react'
import Modal from './Modal'
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik'
import styled from 'styled-components'
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { toast } from 'react-toastify';
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
})

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {

    const addContact = async (values) => {
        try {
            const contactsRef = collection(db, "contact");
            await addDoc(contactsRef, values);
            onClose();
            toast.success("Contact added successfully!", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    backgroundColor: "#4BB543",
                    color: "white",
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    fontSize: "16px",
                    padding: "12px 24px"
                },
                icon: "🎉"
            });
        } catch (error) {
            console.error("Error adding contact: ", error);
        }
    }
    const updateContact = async (values, id) => {
        try {
            const docRef = doc(db, "contact", id);
            await updateDoc(docRef, values);
            onClose();
            toast.success("Contact updated successfully!", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    backgroundColor: "#4BB543",
                    color: "white",
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }
            });
        } catch (error) {
            console.error("Error updating contact: ", error);
        }
    }
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <FormContainer>
                    <Formik
                        validationSchema={contactSchemaValidation}
                        initialValues={
                            isUpdate && contact
                                ? { name: contact.name, email: contact.email }
                                : { name: '', email: '' }
                        }
                        enableReinitialize={true}
                        onSubmit={(values) => {
                            console.log(values)
                            isUpdate ?
                                updateContact(values, contact.id) :
                                addContact(values);
                            onClose(); // Close the modal after submission
                        }}
                    >
                        <FormikForm>
                            <FormField>
                                <Label htmlFor="name">Name</Label>
                                <StyledField name='name' placeholder="Enter name" />
                                <StyledErrorMessage>
                                    <ErrorMessage name="name" />
                                </StyledErrorMessage>
                            </FormField>
                            <FormField>
                                <Label htmlFor="email">Email</Label>
                                <StyledField type='email' name='email' placeholder="Enter email" />
                                <StyledErrorMessage>
                                    <ErrorMessage name="email" />
                                </StyledErrorMessage>
                            </FormField>
                            <ButtonContainer>
                                <SubmitButton type="submit">
                                    {isUpdate ? "Update" : "Add"} Contact
                                </SubmitButton>
                            </ButtonContainer>
                        </FormikForm>
                    </Formik>
                </FormContainer>
            </Modal>
        </div>
    )
}

export default AddAndUpdateContact

const FormContainer = styled.div`
    padding: 2rem 0;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const FormField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const Label = styled.label`
    font-size: 1rem;
    font-weight: 600;
    color: #333;
`

const StyledField = styled(Field)`
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
    
    ${props => props.form?.errors[props.field.name] && props.form?.touched[props.field.name] && `
        border-color: #e74c3c;
        background-color: #fdf3f2;
    `}

    &:focus {
        outline: none;
        border-color: ${props => 
            props.form?.errors[props.field.name] && props.form?.touched[props.field.name] 
            ? '#e74c3c' 
            : '#f4c430'};
        box-shadow: 0 0 0 2px ${props => 
            props.form?.errors[props.field.name] && props.form?.touched[props.field.name]
            ? 'rgba(231, 76, 60, 0.2)'
            : 'rgba(244, 196, 48, 0.2)'};
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
`

const SubmitButton = styled.button`
    background-color: #f4c430;
    color: #000;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #f1b816;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`

const StyledErrorMessage = styled.div`
    color: #e74c3c;
    font-size: 0.8rem;
    margin-top: 0.25rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    animation: slideIn 0.3s ease-in-out;

    &::before {
        /* content: "⚠️"; */
        font-size: 1rem;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`