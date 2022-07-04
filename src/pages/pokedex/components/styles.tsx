import styled from 'styled-components';

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
`

export const Item = styled.li`
    background: ${props => props.color};
    border-radius: 24px;
    height: 140px;
    padding: 16px
`

export const Text = styled.p`

`
