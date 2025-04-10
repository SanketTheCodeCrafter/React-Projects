import React from 'react'
import styled from 'styled-components'

const Rules = () => {
    return (
        <RuleContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>
                    after click on dice if selected number is equal to dice number you
                    will get same point as dice{" "}
                </p>
                <p>if you get wrong guess then 2 point will be dedcuted </p>
            </div>
        </RuleContainer>
    )
}

export default Rules

const RuleContainer = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start; */
    background-color: #fbf1f1;
    padding: 20px;
    border-radius: 8px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    h2{
        font-size: 24px;
        text-align: left;
    }
    .text{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 16px;
        margin-top: 20px;
        /* text-align: center; */
    }
`