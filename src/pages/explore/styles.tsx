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
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    transform: scale(0);
    animation: opening 0.5s 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;

    @keyframes opening {
        to {
            background: radial-gradient(white, transparent);
            transform: scale(1);
        }
    }
`

export const PokemonBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -20px;
    flex: 1;
`