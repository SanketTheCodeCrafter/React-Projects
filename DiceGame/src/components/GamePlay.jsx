import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button } from '../styled/Button'
import { OutLineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
    const [score, setScore]=useState(0)
    const [selectedNos, setSelectedNos] = useState()
    const [currentDice, setCurrentDice]=useState(1)
    const [error, setError]=useState("")
    const [showRules, setShowRules]=useState(false)

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
      };

      const roleDice=()=>{
        if (!selectedNos) {
            setError("Please select a number first");
            // alert("Please select a number first");
            return;
        }
        setError("");

        const randomNumber=generateRandomNumber();
        setCurrentDice(randomNumber);

        if(selectedNos===randomNumber){
            setScore((prev)=>prev+randomNumber);
        }
        else{
            setScore((prev)=>{
                const newScore=prev-2;
                return newScore < 0 ? 0 : newScore;
            });
        }
      }

      const resetScore=()=>{
        setScore(0);
      }

    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score}/>
                <NumberSelector setError={setError} error={error} selectedNos={selectedNos} setSelectedNos={setSelectedNos}/>
            </div>
            <RoleDice currentDice={currentDice}  roleDice={roleDice}/>
            <div className="btn">
                <Button onClick={resetScore}>Reset Score</Button>
                <OutLineButton
                    onClick={()=>setShowRules(!showRules)}
                >{showRules? "Hide" : "Show"} Rules</OutLineButton>
                {showRules && <Rules/>}
            {/* <Rules/> */}
            </div>
        </MainContainer>)
}

export default GamePlay

const MainContainer = styled.div`
    max-width: 1280px;
    height: 80vh;
    margin: 0 auto;
    /* display: flex;
    justify-content: space-around;
    align-items: end; */
    padding-top: 80px;
    max-width: 1280px;

    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btn{
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }
`
