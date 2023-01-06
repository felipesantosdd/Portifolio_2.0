import React from "react";
import { AvatarStyle, BioStyle, ContainerStyle, TransitionStyle } from "./main.styled";
import Avatar from "../../assets/Avatar.png"
import { ButtonStyle } from "../button.styled";

function Main() {
    return (
        <ContainerStyle>
            <AvatarStyle>
                <img src={Avatar} alt="" />
            </AvatarStyle>
            <BioStyle>
                <h1>Felipe S. Oliver</h1>
                <h3>FullStacks Developer</h3>
                <h2>Criação de Websites e sistemas com as mais modernas tecnologias do mercado.</h2>
                <ButtonStyle>Contate-me</ButtonStyle>
            </BioStyle>
            <TransitionStyle>
                <h2>Com grandes poderes vem grandes contas de luz...</h2>
            </TransitionStyle>


        </ContainerStyle>
    )
}

export { Main }