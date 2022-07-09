import styled from 'styled-components';

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 16px;
`

export const Item = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    border-radius: 8px 8px 4px 4px;
    height: 92px;
    padding: 16px 62px 16px 16px;
    background: ${props => `${props.color}10`};
    overflow: hidden;
    box-shadow: 0px 2px 1px ${props => `${props.color}30`};
    transition: all .2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.01) translateY(-2px);
    }

    img {
        position: absolute;
        bottom: 6px;
        right: -10px;
        height: 90px;
        opacity: .8;
    }

    p {
        font-size: 14px;
        font-weight: bold;
        color: ${props => props.color};
    }

    .detail {
        position: absolute;
        width: 100%;
        height: 3px;
        left: 0;
        bottom: 0;
        background: ${props => props.color};
        border-radius: 0 0 4px 4px;
        z-index: 1000;
    }
`

export const Tags = styled.div`
    display: flex;
    gap: 4px;
    
    > div {
        padding: 2px 8px 3px;
    }
`