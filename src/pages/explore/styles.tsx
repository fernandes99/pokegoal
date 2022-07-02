import styled from 'styled-components';

export const Box = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    margin-top: auto;
`

export const Title = styled.h2`
    font-size: 16px;
    color: var(--gray-darker);
    font-weight: bold;

    strong {
        color: ${props => props.color};
    }
    
`

export const Text = styled.p`
    
`

export const Actions = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    margin-top: 16px;
`