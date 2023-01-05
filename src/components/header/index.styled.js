import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 730px) {
        flex-direction: column;
        height: auto;
        padding: 20px 0;
    }
`

const LogoStyle = styled.div`
width: 100px;
height: 60px;
display: flex;
align-items: center;
img{
    border-radius: 50%;
    width: auto;
    height: auto;
    max-width: 100%;
}

@media (max-width: 730px){
    width: 100%;
    justify-content: center;
    img{
        max-width: 100px;
    }
}
`

const OptionsStyle = styled.div`
    width: 50%;
    height: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    button{
        background-image: linear-gradient(to right, #3a2713, #5c4428, #7f6440, #a38558, #c8a972);
        border-radius: 10%;
        width: 90px;
        border-style: none;
        padding: 10px;
    }
    @media (max-width: 730px) {
        width:90% ;
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        button{
            margin-bottom: 20px;
        }
    }
    `



export { HeaderStyle, LogoStyle, OptionsStyle }

