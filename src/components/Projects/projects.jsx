import React, { useContext } from "react"
import { Container } from "./projects.styled"
import { Card } from "../Card/card"
import { UserContext } from "../../Context/user.Context"


export function ProjectsComponent() {

    const { projects } = useContext(UserContext)



    return (
        <Container>
            <h2>Projects</h2>
            {projects.map((ele) => {
                return (
                    <a href={ele.link}>
                        <Card
                            key={ele.name}
                            img={ele.image}
                            name={ele.name}
                            front={ele.front}
                            production={ele.production}
                            back={ele?.back}
                            description={ele.description}
                            target="_blank"
                        />
                    </a>

                )
            })}
        </Container>
    )
}