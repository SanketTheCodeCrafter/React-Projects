import React from 'react'
// import { style } from 'styled-components'
import styled from 'styled-components'

const Nav = () => {
    return (
        <NavStyle>
            <div>
                <img src="./images/firebase.png" alt="firebase logo" />
                <h1>Firebase Contact App</h1>
            </div>
        </NavStyle>
    )
}

export default Nav

const NavStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: black;
        background-color: white;
        height: 60px;
        padding: 50px 90px;
        border-radius: 20px;
        margin: 15px  auto;
        gap: 15px;
        font-weight: 600;
        font-size: 25px;
    }
`