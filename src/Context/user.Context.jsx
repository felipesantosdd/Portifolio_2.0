import { createContext } from "react";
import project00 from "../assets/projects/00.png"
import project01 from "../assets/projects/01.png"
import project02 from "../assets/projects/02.png"
import Node from "../assets/projects/Node.png"
import Fullstack from "../assets/projects/Fullstack.png"

export const UserContext = createContext()


export function UserProvider({ children }) {
    const projects = [
        {
            name: 'Desafio Fullstack',
            image: Fullstack,
            description: 'Este projeto tem como objetivo fornecer uma maneira fácil e eficiente de gerenciar contatos. O usuário pode adicionar e excluir contatos, além de visualizar todos os contatos armazenados, Para a construção do projeto, utilizei o framework Next.js para a construção do frontend e o Node.js para a construção do backend. Utilizei também o banco de dados Postgres para armazenar as informações dos contatos.',
            front: 'https://github.com/felipesantosdd/Desafio_fullstack_Frontend',
            back: 'https://github.com/felipesantosdd/Desafio_fullstack_Backend',
        },
        {
            name: 'Cinema Kenzie',
            image: Node,
            description: 'O projeto "Cinema Kenzie" é uma aplicação web que permite cadastrar, vender e comprar produtos de um cinema, integrada com uma API feita em Node.js. Através da interface, o usuário pode realizar o cadastro de seus dados pessoais, comprar ingressos para sessões de cinema e adquirir produtos como pipoca, refrigerante e doces. A aplicação também conta com um sistema de gestão para o cinema, onde é possível cadastrar novos filmes em cartaz, gerenciar sessões, produtos disponíveis e promoções especiais. A integração com a API permite que as transações realizadas na aplicação sejam registradas em um banco de dados, possibilitando a análise de dados de vendas e o monitoramento da performance do cinema. O "Cinema Kenzie" oferece uma experiência completa e intuitiva para os usuários, além de fornecer um sistema de gestão eficiente para os administradores do cinema.',
            back: 'https://github.com/felipesantosdd/Cinema_Kenzie',
        },
        {
            name: 'Controle Financeiro 1.0',
            image: project00,
            description: 'Esse é um projeto de controle financeiro  que permite ao usuário gerenciar suas finanças pessoais de maneira organizada. Ele permite adicionar as entradas de dinheiro, como salários e outros tipos de rendimento, e as saídas, como contas a pagar e despesas. O controle financeiro também fornece uma visão geral do saldo total no caixa, mostrando as entradas, despesas e o saldo atual. Seu codigo backend e frontend pode ser encontrado no meu gitHub.',
            front: "https://github.com/Kenzie-Academy-Brasil-Developers/Nu_Kenzie",
            back: "https://github.com/felipesantosdd/Caixa_DataBase",
            production: "https://resourcemaster.vercel.app/login"

        },
        {
            name: 'Kenzie Hub',
            image: project01,
            description: 'O projeto Kenzie Hub é uma aplicação web que tem como objetivo criar um ambiente onde desenvolvedores possam se cadastrar, adicionar suas tecnologias de interesse e entrar em contato com outros desenvolvedores que trabalham com essas mesmas tecnologias.',
            front: 'https://github.com/Kenzie-Academy-Brasil-Developers/Kenzie_Hub',
        }
        ,
        {
            name: 'TechPosters',
            image: project02,
            description: 'O projeto Tech Posters é uma rede social simulada que tem como objetivo permitir que os usuários criem uma conta, cadastrem suas informações pessoais, criem postagens, façam amizades e curtam as postagens de outros usuários. A aplicação é baseada em uma API desenvolvida em Node.js que gerencia as funcionalidades de criação de usuários, criação e curtidas de postagens, bem como as amizades entre os usuários.',
            front: 'https://github.com/Kenzie-Academy-Brasil-Developers/m2-entrega-blog-m2-supercleiton',
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
