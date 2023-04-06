import styled from "styled-components";


export const ContainerStyle = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: center;
@media (max-width:730px){
    flex-direction: column;
    align-items: center;
}

`
export const AvatarStyle = styled.div`
    width: 50%;
    margin-right: -50px;
    
    img{
        max-width: 60%;
        border-radius: 67px;
    box-shadow:  48px 48px 96px #0c1118,
             -48px -48px 96px #121922;
    }

    @media (max-width:730px){
        display: flex;
        margin: 0 auto;
        justify-content: center;
        width: 100%;}
`

export const BioStyle = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    text-align: left;
    h3{
        margin-top: -25px;
        color: #7A1D1E;
    }

    @media (max-width:730px){
        width: 100%;
        margin: 0 auto;
        text-align: center;
        display: flex;
        button{
            margin: 0 auto;
        }
    }
    `

export const TransitionStyle = styled.div`
    width: 40%;
    margin: 100px 0;
    padding: 25px 50px;
    color: white;
    border: 0.5px solid white;
    @media (max-width:730px){
        width: 70%;
    }
    `