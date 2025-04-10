
import styled from 'styled-components'
import { useState } from 'react'

const NumberSelector = ({error, setError, selectedNos, setSelectedNos}) => {
    const Nos = [1, 2, 3, 4, 5, 6]

    console.log(selectedNos)

    const numberSelectorHandler=(no)=>{
        setSelectedNos(no);
        setError("");
    }

    return (
        <Container>
            <p style={{ color: 'red' }}>{error}</p>
            <div className='flex'>
            {Nos.map((no, index) => (
                <Box
                isSelected={no == selectedNos}
                key={index} onClick={()=>numberSelectorHandler(no)}>{no}</Box>
            ))}
            </div>
            <p>Select Number</p>
        </Container>
        )
}

export default NumberSelector

const Container=styled.div`
    .flex{
        display: flex;
        gap: 10px;
    }
    p{
        font-size: 16px;
        display: flex;
        justify-content: flex-end;
        margin-top: 16px;
    }
`

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;
    width: 72px;
    border: 1px solid black;
    /* margin: 10px; */
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
`