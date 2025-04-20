import { createPortal } from 'react-dom';
import styled from 'styled-components';
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ onClose, isOpen, children }) => {
    const Overlay = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;

    const ModalContainer = styled.div`
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        position: relative;
        max-width: 800px;  /* Increased from 500px */
        width: 95%;        /* Increased from 90% */
        min-height: 400px; /* Added minimum height */
    `;

    const CloseButton = styled(AiOutlineClose)`
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
        font-size: 1.5rem;
        transition: transform 0.2s;
        
        &:hover {
            transform: scale(1.1);
        }
    `;

    return createPortal(
        <>
            {isOpen && (
                <Overlay>
                    <ModalContainer>
                        <CloseButton onClick={onClose} />
                        {children}
                    </ModalContainer>
                </Overlay>
            )}
        </>,
        document.getElementById('modal-root')
    );
}

export default Modal