import { TagBox, TagText } from "./styles";
import { PropsTagType } from "./types";

export const Tag: React.FC<PropsTagType> = (props: PropsTagType) => {
    return (
        <TagBox color={props.color}>
            <TagText>{props.text}</TagText>
        </TagBox>
    )
}