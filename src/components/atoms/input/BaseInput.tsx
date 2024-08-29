import { Input } from "@yamada-ui/input";
import React, { FC } from "react";

type Props = {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const BaseInput: FC<Props> = (props) => {
    const { type, value, placeholder = "", onChange } = props;
    return (
        <Input type={type} value={value} placeholder={placeholder} onChange={onChange}></Input>
    )
}