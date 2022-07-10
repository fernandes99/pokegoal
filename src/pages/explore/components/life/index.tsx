import React from "react";
import { LifeBar, LifeBox, Text } from "./styles"
import { PropsLifeType } from "./types";

export const Life: React.FC<PropsLifeType> = (props: PropsLifeType) => {
    return (
        <LifeBox>
            <LifeBar full={props.full} current={props.current} percentage={props.percentage} />
            <Text>{props.current}/{props.full}</Text>
        </LifeBox>
    );
}