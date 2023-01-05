import { HeaderStyle, LogoStyle, OptionsStyle } from "./index.styled"
import React from "react"
import Logo from "../../assets/Logo02.png"
function Reader() {
    return (
        <HeaderStyle>
            <LogoStyle img={Logo}>
                <img src={Logo} alt="Logo" />
            </LogoStyle>
            <OptionsStyle>
                <button>Home</button>
                <button>Works</button>
                <button>About-me</button>
                <button>Contacts</button>
            </OptionsStyle>
        </HeaderStyle>
    )
}

export { Reader }