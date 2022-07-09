import styled from 'styled-components';
import { PropsTagType } from './types';

export const TagBox = styled.div.attrs((props: PropsTagType) => props)`
    border: ${props => props.filled ? 'unset' : `1px solid ${props.color}`};
    background-color: ${props => props.filled ? `${props.color}50` : 'unset'};
    color: ${props => props.color};
    font-size: ${props => props.fontSize ? props.fontSize : '12px'};
    border-radius: 12px;
    padding: 4px 8px;
`

export const TagText = styled.span`
`