import React from "react";
import Button from '@mui/material/Button';
import { CardDescription, CardImg, CardLink, CardName, CardStyle } from "./card.Styled"

export function Card({ img, name, description, front, production, back }) {
    return (
        <CardStyle>
            <CardImg>
                <img src={img} alt="project" />
            </CardImg>
            <CardName>{name}</CardName>
            <CardDescription>{description}
            </CardDescription>
            <CardLink>

                {
                    front && (<a href={front}><Button variant="outlined">Front</Button></a>)
                }
                {
                    back && (<a href={back}><Button variant="outlined">Back</Button></a>)
                }
                {
                    production && (<a href={back}><Button variant="outlined">Production</Button></a>)
                }
            </CardLink>

        </CardStyle >

    )
}