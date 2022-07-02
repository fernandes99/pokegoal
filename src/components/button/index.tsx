import { PrimaryButton, DefaultButton } from "./styles";
import { ButtonType, PrimaryButtonType, DefaultButtonType } from "./types";

export const Button: ButtonType = {
    Primary: (props: PrimaryButtonType) => {
        return (
            <PrimaryButton>{props.text}</PrimaryButton>
        )
    },
    Default: (props: DefaultButtonType) => {
        return (
            <DefaultButton>{props.text}</DefaultButton>
        )
    }
}