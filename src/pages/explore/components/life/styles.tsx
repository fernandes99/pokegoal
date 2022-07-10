import styled from 'styled-components';
import { PropsLifeType } from './types';

export const LifeBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LifeBar = styled.div.attrs((props: PropsLifeType) => props)`
    position: relative;
    width: 80%;
    height: 5px;
    border-radius: 5px;
    background: var(--gray-light);

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${props => `${props.percentage}%`};
        height: 100%;
        background:
            ${props => {
                    if (props.percentage >= 50) return '#2fd671';
                    if (props.percentage >= 20) return '#c8d433';
                    return '#d64646'
                }
            };
        border-radius: 5px;
    }

    &:after {
        content: attr(full);
        color: ${props => {
                    if (props.percentage >= 50) return '#2fd671';
                    if (props.percentage >= 20) return '#c8d433';
                    return '#d64646'
                }
            };
        z-index: 99;
        position: relative;
    }
`

export const Text = styled.span`
    color: #c6c6c6;
` 