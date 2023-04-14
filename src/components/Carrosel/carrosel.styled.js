import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    height: auto;
    flex-wrap: wrap;
    flex-direction: row;
    object-fit: contain;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export function newOrder(producucts) {
    const order = {
        cod: '0001',
        products: 'products',
        client: 'client',
        total: 'total',
    }

    window.print(order)
    return order
}
