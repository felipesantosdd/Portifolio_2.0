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
                <h2>
                    Desenvolvedor FullStack com experiência em diversas tecnologias e pronto para encarar qualquer projeto.
                </h2>
                <ButtonStyle>Contate-me</ButtonStyle>
            </BioStyle>
            <TransitionStyle>
                <h2>A documentação é o escudo do programador.</h2>
            </TransitionStyle>


        </ContainerStyle>
    )
}

export { Main }