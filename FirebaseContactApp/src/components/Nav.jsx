import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    return (
        <NavStyle>
            <div>
                <img src="./images/firebase.svg" alt="firebase logo" />
                <h1>Contact App</h1>
            </div>
        </NavStyle>
    )
}

export default Nav

const NavStyle = styled.div`
    padding: 1rem;
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        height: 70px;
        padding: 0 2rem;
        border-radius: 16px;
        margin: 0 auto;
        gap: 1.5rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        img {
            height: 40px;
            transition: all 0.3s ease;

            &:hover {
                transform: scale(1.1);
            }
        }

        h1 {
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(90deg, #FF4D4D 0%, #F9CB28 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        @media (max-width: 640px) {
            flex-direction: column;
            height: auto;
            padding: 1rem;
            gap: 0.5rem;
            text-align: center;

            h1 {
                font-size: 1.4rem;
            }
        }
    }
`