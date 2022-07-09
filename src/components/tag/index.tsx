import { TagBox, TagText } from "./styles";
import { PropsTagType } from "./types";

export const Tag: React.FC<PropsTagType> = (props: PropsTagType) => {
    return (
        <TagBox color={props.color} filled={props.filled} fontSize={props.fontSize}>
            <TagText>{props.text}</TagText>
        </TagBox>
    )
}