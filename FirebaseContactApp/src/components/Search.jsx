import React from 'react'
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";

const Search = ({ onOpen, searchTerm, setSearchTerm }) => {
    return (
        <SearchStyle>
            <div>
                <FiSearch style={{ color: 'white', fontSize: '24px' }} />
                <input
                    type="text"
                    placeholder="Search contacts..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <AiFillPlusCircle
                    className="add-icon"
                    onClick={onOpen}
                    style={{ color: 'white', fontSize: '35px' }}
                />
            </div>
        </SearchStyle>
    );
};

export default Search

const SearchStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    max-width: 800px;
    padding: 0 1rem;
    
    div {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
    }
    
    svg {
        position: absolute;
        left: 20px;
        transition: all 0.3s ease;
    }
    
    input {
        width: 100%;
        height: 55px;
        border-radius: 99px;
        border: none;
        padding: 0 60px;
        font-size: 18px;
        font-weight: 500;
        color: white;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        outline: none;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);

        &:focus {
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        &::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }
    }

    .add-icon {
        position: absolute;
        right: 20px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            transform: rotate(90deg);
        }
    }

    @media (max-width: 640px) {
        margin: 1rem auto;
        
        input {
            height: 50px;
            font-size: 16px;
        }
    }
`