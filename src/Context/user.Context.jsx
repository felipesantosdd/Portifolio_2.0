import { createContext } from "react";
import project00 from "../assets/projects/00.png"
import project01 from "../assets/projects/01.png"
import project02 from "../assets/projects/02.png"

export const UserContext = createContext()


export function UserProvider({ children }) {
    const projects = [
        {
            name: 'Controle Financeiro 1.0',
            image: project00,
            description: 'Esse é um projeto de controle financeiro  que permite ao usuário gerenciar suas finanças pessoais de maneira organizada. Ele permite adicionar as entradas de dinheiro, como salários e outros tipos de rendimento, e as saídas, como contas a pagar e despesas. O controle financeiro também fornece uma visão geral do saldo total no caixa, mostrando as entradas, despesas e o saldo atual. Seu codigo backend e frontend pode ser encontrado no meu gitHub.',
            link: "https://github.com/Kenzie-Academy-Brasil-Developers/Nu_Kenzie"
        },
        {
            name: 'TechPosters',
            image: project02,
            description: 'Esse projeto é uma rede social simulada, onde é possível criar uma conta, cadastrar um usuário, criar postagens, fazer amizades e curtir postagens de outros usuários.',
            link: 'https://github.com/Kenzie-Academy-Brasil-Developers/M1_Rede_Social'
        },
        {
            name: 'Kenzie Hub',
            image: project01,
            description: 'Esse foi um projeto que emula uma rede social para devs, onde cada usuario consegue cadastrar suas tecnologias',
            link: 'https://github.com/Kenzie-Academy-Brasil-Developers/Kenzie_Hub'
        }

    ]

    const contact = [
        {
            name: "Instagram",
            icon: "https://cdn-icons-png.flaticon.com/512/3670/3670125.png",
            link: "https://www.instagram.com/felipe_s._oliver/"
        },
        {
            name: "LinkedIn",
            icon: "https://cdn-icons-png.flaticon.com/512/3670/3670129.png",
            link: "https://www.linkedin.com/in/felipe-oliver/"
        },
        {
            name: "Github",
            icon: "https://cdn-icons-png.flaticon.com/512/4494/4494756.png",
            link: "https://github.com/felipesantosdd"
        },
        {
            name: "Whatsapp",
            icon: "https://cdn-icons-png.flaticon.com/512/3670/3670133.png",
            link: "https://contate.me/felipe-oliver"
        }
    ]

    return (
        <UserContext.Provider value={{
            projects,
            contact
        }}>{children}
        </UserContext.Provider>
    )
}
