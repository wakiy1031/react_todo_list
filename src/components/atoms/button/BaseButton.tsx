import { Button } from "@yamada-ui/button";
import React, { FC } from "react"

type Props = {
    children: React.ReactNode;
    onClick: () => void;
    colorScheme: string
}

export const BaseButton: FC<Props> = (props) => {
    const { children, onClick, colorScheme } = props;
    return (
        <Button onClick={onClick} colorScheme={colorScheme}>{children}</Button>
    )
}