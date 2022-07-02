import styled from 'styled-components';

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 8px;
`

export const Item = styled.li`
    border-radius: 12px;

    .content {
        padding: 16px;

        h3 {
            font-size: 14px;
            color: var(--white);
        }
    }
`
