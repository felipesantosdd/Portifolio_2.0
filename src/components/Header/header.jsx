import { HeaderStyle, LogoStyle, OptionsStyle } from "./header.styled"
import React from "react"
import Logo from "../../assets/Logo02.png"
import { ButtonStyle } from "../button.styled"
function Reader() {
    return (
        <HeaderStyle>
            <LogoStyle img={Logo}>
                <img src={Logo} alt="Logo" />
            </LogoStyle>
            <OptionsStyle>
                <ButtonStyle>Home</ButtonStyle>
                <ButtonStyle>Works</ButtonStyle>
                <ButtonStyle>About-me</ButtonStyle>
                <ButtonStyle>Contacts</ButtonStyle>
            </OptionsStyle>
        </HeaderStyle>
    )
}

export { Reader }