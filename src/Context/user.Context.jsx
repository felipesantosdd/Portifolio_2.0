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
            description: 'Esse é um projeto de controle financeiro  que permite ao usuário gerenciar suas finanças pessoais de maneira organizada. Ele permite adicionar as entradas de dinheiro, como salários e outros tipos de rendimento, e as saídas, como contas a pagar e despesas. O controle financeiro também fornece uma visão geral do saldo total no caixa, mostrando as entradas, despesas e o saldo atual. Seu codigo backend e frontend pode ser encontrado no meu gitHub.'
        },
        {
            name: 'TechPosters',
            image: project02,
            description: 'Esse foi um projeto que emula uma rede social, sendo possivel criar conta, cadastrar usuario, criar posts, fazer amizades e curtir posts de outros usuarios.',
            link: 'https://stunning-chainsaw-734400ba.pages.github.io/'
        },
        {
            name: 'Kenzie Hub',
            image: project01,
            description: 'Esse foi um projeto que emula uma rede social para devs, onde cada usuario consegue cadastrar suas tecnologias',
        }

    ]

    return (
        <UserContext.Provider value={{
            projects
        }}>{children}
        </UserContext.Provider>
    )
}
