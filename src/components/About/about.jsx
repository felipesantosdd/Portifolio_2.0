import { Container, Descriptions, Logo } from "./about.style";
import LogoImg from "../../assets/Logo02.png"

export function About() {

    return (
        <Container>
            <Descriptions>
                <h1>Sobre mim</h1>
                <h3>
                    Olá! Meu nome é Felipe e sou um desenvolvedor full-stack com foco em JavaScript.<br /> Comecei a trabalhar como programador há alguns anos e desde então, tenho me dedicado a aperfeiçoar minhas habilidades e ampliar meus conhecimentos em diversas áreas da tecnologia.
                </h3>

                <h3>
                    Como desenvolvedor JavaScript, já tive a oportunidade de trabalhar em projetos web e integrando APIs. Gosto de enfrentar novos desafios e sempre estou disposto a aprender algo novo. Além disso, acredito que a colaboração e o trabalho em equipe são fundamentais para o sucesso de qualquer projeto.
                </h3>

                <h3>
                    Em meu portfólio, você pode ver alguns dos projetos nos quais já trabalhei e conhecer um pouco mais sobre as minhas habilidades e experiência. Estou ansioso para continuar minha jornada como desenvolvedor e contribuir para projetos incríveis.
                </h3>
            </Descriptions>
            <Logo>
                <img src={LogoImg} alt="Logo" />
            </Logo>
        </Container>
    )
}