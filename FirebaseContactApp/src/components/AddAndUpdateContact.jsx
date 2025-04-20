import React from 'react'
import Modal from './Modal'
import { Formik, Field, Form as FormikForm } from 'formik'
import styled from 'styled-components'

const AddAndUpdateContact = ({ isOpen, onClose }) => {
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <FormContainer>
                    <Formik
                        initialValues={{name: '', email: ''}}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        <FormikForm>
                            <FormField>
                                <Label htmlFor="name">Name</Label>
                                <StyledField name='name' placeholder="Enter name"/>
                            </FormField>
                            <FormField>
                                <Label htmlFor="email">Email</Label>
                                <StyledField type='email' name='email' placeholder="Enter email"/>
                            </FormField>
                            <ButtonContainer>
                                <SubmitButton type="submit">
                                    Add Contact
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
    
    &:focus {
        outline: none;
        border-color: #f4c430;
        box-shadow: 0 0 0 2px rgba(244, 196, 48, 0.2);
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