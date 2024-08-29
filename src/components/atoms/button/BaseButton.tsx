import { Button } from "@yamada-ui/button";
import React, { FC } from "react"

type Props = {
    children: React.ReactNode;
    onClick: () => void;
    colorScheme: string;
    disabled?: boolean;
}

export const BaseButton: FC<Props> = (props) => {
    const { children, onClick, colorScheme, disabled } = props;
    return (
        <Button onClick={onClick} colorScheme={colorScheme} disabled={disabled}>{children}</Button>
    )
}