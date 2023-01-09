import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100%;
justify-content: center;
@media (max-width:730px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
  `

export const Descriptions = styled.div`
  width: 40%;
  color: white;
  display: flex;
  flex-direction: column;
  @media (max-width:730px){
    width: 90%;
  }
  `

export const Logo = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    img{
        width: 100%;
    }

    @media (max-width:730px){
        display: flex;
        width: 90%;
    }
  `