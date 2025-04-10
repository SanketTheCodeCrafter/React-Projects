import styled from 'styled-components';

export const Button=styled.button`

    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.4s ease-in-out;


    &:hover{
        background-color: red;
        color: white;
        border: 1px solid black;
        transition: all 0.3s ease-in-out;
    }
`

export const OutLineButton=styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: all 0.4s ease-in-out;


    &:hover{
        background-color: palegreen;
        color: darkmagenta;
        border: none;
        transition: all 0.3s ease-in-out;
    }
`