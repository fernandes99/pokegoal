import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    &.auth {
        &-box {
            height: 100%;
            justify-content: space-between;
            align-items: center;
        }

        &-image {
            margin: auto;
            position: relative;
            width: 300px;
            height: 300px;

            &:before {
                content: '';
                position: absolute;
                right: 50%;
                top: 50%;
                transform: translate(50%, -50%);
                width: 60%;
                height: 60%;
                background-color: var(--blue-lighter);
                border-radius: 50%;
                z-index: -1;
            }
        }

        &-spinner {
            display: flex;
            align-items: center;
            margin: auto;
        }
    }
`

export const Text = styled.p`
    font-size: 18px;
    color: var(--gray-darker);
`

export const Title = styled.h1`
    font-size: 52px;
    background: linear-gradient(to right, var(--purple) 0%, var(--blue) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    line-height: 100%;
    margin-bottom: 16px;
`

export const Input = styled.input`
    border: 1px solid var(--gray-light);
    border-radius: 12px;
    padding: 12px 16px;
    height: 48px;
    width: 100%;
    transition: all .2s;

    &:focus {
        border-color: var(--blue);
    }
`

export const Button = styled.button`
    background-color: var(--blue);
    height: 48px;
    border-radius: 12px;
    color: var(--white);
    font-size: 18px;
    font-weight: bold;
    margin-top: 8px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`