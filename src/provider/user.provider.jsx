import { createContext } from "react";
import project00 from "../assets/projects/00.png"

export const Context = createContext()


export function Provider({ children }) {
    const projects = [
        {
            name: 'TechPosters',
            image: project00,
            description: 'TEsse foi um projeto que emula uma rede social, sendo possivel criar conta, cadastrar usuario, criar posts, fazer amizades e curtir posts de outros usuarios.',
            link: 'https://stunning-chainsaw-734400ba.pages.github.io/'
        }
    ]

    return (
        <Context.Provider value={{
            projects

        }}>{children}</Context.Provider>
    )
}
