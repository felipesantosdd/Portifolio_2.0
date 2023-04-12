import { Container } from "./carrosel.styled";
import { Swiper, SwiperSlide } from "swiper"
import "swiper"

import css from "../../assets/icons/css.png"
import django from "../../assets/icons/django.jpg"
import html from "../../assets/icons/html.png"
import js from "../../assets/icons/js.png"
import nest from "../../assets/icons/nest.png"
import next from "../../assets/icons/next.png"
import pitao from "../../assets/icons/pitao.png"
import postgre from "../../assets/icons/postgre.png"
import react from "../../assets/icons/react.png"
import styled from "../../assets/icons/styled-components.png"
import ts from "../../assets/icons/ts.png"
import vue from "../../assets/icons/vue.png"

export function Carrosel() {
    const items = [
        css, django, html, js, nest, next, pitao, postgre, react, styled, ts, vue
    ]

    return (
        <Container>

        </Container>
    )
}