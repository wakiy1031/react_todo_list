import { FC } from 'react'
import { Flex } from "@yamada-ui/layouts"
import { BaseButton } from "../atoms/button/BaseButton"
import { BaseInput } from "../atoms/input/BaseInput"

type Props = {
    inputValue: string
    onChangeTodoText: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClickAdd: () => void
}

export const AddTodo: FC<Props> = ({ inputValue, onChangeTodoText, onClickAdd }) => {
    return (
        <Flex gap="md" mb="4">
            <BaseInput type="text" placeholder="TODOを入力" value={inputValue} onChange={onChangeTodoText}  />
            <BaseButton onClick={onClickAdd} colorScheme="blue">追加</BaseButton>
        </Flex>
    )
}