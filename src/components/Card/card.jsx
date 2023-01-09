import React from "react";
import { CardDescription, CardImg, CardName, CardStyle } from "./card.Styled";
import Project00 from "../../assets/projects/00.png"

export function Card({ img, name, description }) {
    return (
        <CardStyle>
            <CardImg>
                <img src={img} alt="project" />
            </CardImg>
            <CardName>{name}</CardName>
            <CardDescription>{description}</CardDescription>


        </CardStyle>

    )
}