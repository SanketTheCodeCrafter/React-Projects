import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
`;

const ImageWrapper = styled.div`
    position: relative;
`;

const Image = styled.img`
    width: 8rem;
    height: 8rem;
    opacity: 0.8;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
`;

const Description = styled.p`
    color: #9CA3AF;
    text-align: center;
    max-width: 28rem;
`;

const NoContact = () => {
    return (
        <Container>
            <ImageWrapper>
                <Image src="/images/nocontact.png" alt="No Contacts" />
            </ImageWrapper>
            <Title>No Contacts Found</Title>
            <Description>
                Your contact list is empty. Start adding contacts by clicking the "Add Contact" button above.
            </Description>
        </Container>
    );
};

export default NoContact;