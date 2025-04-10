import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({currentDice, roleDice}) => {

    
    
  return (
     <DiceContainer>
        <div className="disc" onClick={roleDice}>
            <img src={`/images/dice_${currentDice}.png`} alt="" />
            <p>Click To Roll The Dice</p>
        </div>
     </DiceContainer>
  )
}

export default RoleDice

const DiceContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    
    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }
`