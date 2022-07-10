import React from "react";
import { LifeBar } from "./styles"

export const Life: React.FC<any> = (props: any) => {
    return (
        <>
            <LifeBar value={props.value} />
        </>
    );
}