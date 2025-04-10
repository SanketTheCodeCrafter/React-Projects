import React from 'react'
import styled from 'styled-components'


const StartGame = ({toggle}) => {
    return (
        <>
            <Container>
                <div>
                    <img src="/images/dices.png" alt="" />
                </div>
                <div className='content'>
                    <h1>Dice Game</h1>
                    <div className="button-wrapper">
                        <button onClick={toggle}>Play Now</button>
                    </div>

                </div>
            </Container>
        </>
    )
}

export default StartGame

const Container = styled.div`
    max-width: 1280px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;;
    margin: 0 auto;

     
    .content{

        .button-wrapper{
            display: flex;
            justify-content: flex-end;
        }

        h1{
            font-size: 96px;
        }
        button{
            background-color: black;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.4s ease-in-out;


            &:hover{
                background-color: white;
                color: black;
                border: 1px solid black;
                transition: all 0.3s ease-in-out;
            }
        }
    }
`

