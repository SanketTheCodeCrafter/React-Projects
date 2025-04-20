import React from 'react'
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";



const Search = ({onOpen}) => {
return (
    <SearchStyle>
    <div>
            <FiSearch style={{color: 'white', fontSize: '30px'}}/>
            <input type="text" placeholder='Search' />
            <AiFillPlusCircle onClick={onOpen}style={{color: 'white', fontSize: '50px', marginLeft: '400px'}}/>
    </div>
    </SearchStyle>)
}

export default Search

const SearchStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    
    div {
        position: relative;
        display: flex;
        align-items: center;
        /* gap: 35px; */
    }
    
    svg {
        position: absolute;
        left: 20px;
    }
    
    input{
        width: 400px;
        height: 50px;
        border-radius: 20px;
        border: none;
        padding-left: 50px;
        padding-right: 20px;
        font-size: 20px;
        font-weight: 600;
        color: white;
        background-color: #2f2f2f;
        outline: none;
    }
`