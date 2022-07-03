import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PkmImage = styled.img`
    width: 280px;
    height: 280px;
    background: radial-gradient(${props => props.color}, transparent, transparent);
`

export const Info = styled.div`
    display: grid;
    gap: 4px;
`

export const Title = styled.h1`
    font-size: 28px;
    color: ${props => props.color};
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
`

export const Tags = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`