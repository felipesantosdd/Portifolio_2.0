import React, { useContext } from "react"
import { Container } from "./projects.styled"
import { Card } from "../Card/card"
import { UserContext } from "../../Context/user.Context"


export function ProjectsComponent() {

    const { projects } = useContext(UserContext)
    console.log(projects)


    return (
        <Container>
            <h2>Projects</h2>
            {projects.map((ele) => {
                return (
                    <Card key={ele.name} img={ele.image} name={ele.name} description={ele.description} />
                )
            })}
        </Container>
    )
}