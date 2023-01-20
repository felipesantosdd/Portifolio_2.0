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
        </HeaderStyle>
    )
}

export { Reader }