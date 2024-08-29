import { Button } from "@yamada-ui/button";
import React, { FC } from "react"

type Props = {
    children: React.ReactNode;
    onClick: () => void;
}

export const BaseButton: FC<Props> = (props) => {
    const { children, onClick } = props;
    return (
        <Button onClick={onClick}>{children}</Button>
    )
}