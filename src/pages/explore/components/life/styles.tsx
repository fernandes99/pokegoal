import styled from 'styled-components';
import { PropsLifeType } from './types';

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
        width: ${props => `${props.value}%`};
        height: 100%;
        background:
            ${props => {
                    if (props.value >= 50) return '#2fd671';
                    if (props.value >= 20) return '#c8d433';
                    return '#d64646'
                }
            };
        border-radius: 5px;
    }

    /* &:after {
        content: attr(value)'%';
        color: ${props => {
                    if (props.value >= 50) return '#2fd671';
                    if (props.value >= 20) return '#c8d433';
                    return '#d64646'
                }
            };
        z-index: 99;
        position: relative;
    } */
`