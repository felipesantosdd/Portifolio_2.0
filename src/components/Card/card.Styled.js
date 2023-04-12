import styled from "styled-components"

export const CardStyle = styled.div`
    width: 300px;
    height: 400px;
    border: 1px solid white;
    margin: 10px 0 60px;
    text-decoration: none;
  `

export const CardImg = styled.div`
  width: 100%;
  height: 40%;
  border-bottom: 1px solid white;
  img{
    max-width: 100%;
    height: 100%;
  }
  `

export const CardName = styled.div`
    width: auto;
    height: auto;
    border-bottom: 1px solid wheat;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
    text-decoration: none;
`

export const CardDescription = styled.div`
  width: auto;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  color: white;
  padding: 5px;
  text-align: center;
  overflow: auto;
  align-items: center;
  text-decoration: none;
  `

export const CardLink = styled.div`
width: auto;
height: auto;
padding: 5px;
display: flex;
justify-content: center;
flex-wrap: wrap;
color: white;
text-decoration: none;
border: 1px solid white;
border-top: none;
margin-top: 6px;
display: flex;
justify-content: space-evenly;
a{
  text-decoration: none;
  color: white;
}
`