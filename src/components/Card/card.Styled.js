import styled from "styled-components"

export const CardStyle = styled.div`
    width: 330px;
    height: 400px;
    border: 1px solid white;
    margin-bottom: 50px;
  `

export const CardImg = styled.div`
  width: 100%;
  height: 40%;
  border-bottom: 1px solid white;
  img{
    width: 100%;
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
`

export const CardDescription = styled.div`
  width: auto;
  height: 50%;
  border-bottom: 1px solid wheat;
  display: flex;
  flex-wrap: wrap;
  color: white;
  padding: 5px;
  text-align: center;
  overflow: auto;
  align-items: center;
  `