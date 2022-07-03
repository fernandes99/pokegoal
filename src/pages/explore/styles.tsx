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
        color: var(--purple);
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

export const ExploringBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    margin: auto;

    h2 {
        font-size: 24px;
    }
`

export const CatchingBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
`