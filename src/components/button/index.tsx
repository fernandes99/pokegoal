import { PrimaryButton } from "./styles";
import { ButtonType, PrimaryButtonType } from "./types";

export const Button: ButtonType = {
    Primary: (props: PrimaryButtonType) => {
        return (
            <PrimaryButton>{props.text}</PrimaryButton>
        )
    }
}