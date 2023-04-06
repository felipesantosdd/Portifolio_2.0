
import { useContext } from "react";
import { UserContext } from "../../Context/user.Context";
import { CardStyle, Footer } from "./Contact.styled";

export function Contact() {

    const { contact } = useContext(UserContext)

    return (


        <Footer>
            {contact.map((ele) => {
                return <CardStyle><a href={ele.link} title={ele.name}><img src={ele.icon} alt={`icon of ${ele.name}`} /></a></CardStyle>
            })}
        </Footer>

    )
}