import { FC, useState, useEffect } from 'react'
import { Flex } from "@yamada-ui/layouts"
import { BaseButton } from "../atoms/button/BaseButton"
import { BaseInput } from "../atoms/input/BaseInput"

type Props = {
    id: number
    initialText: string
    onSave: (id: number, newText: string) => void
    onCancel: () => void
}

export const EditTodo: FC<Props> = ({ id, initialText, onSave, onCancel }) => {
    const [editText, setEditText] = useState(initialText)

    useEffect(() => {
        setEditText(initialText)
    }, [initialText])

    const handleSave = () => {
        if (editText.trim() !== '') {
            onSave(id, editText)
        }
    }

    return (
        <Flex gap="md">
            <BaseInput
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
            />
            <BaseButton 
                onClick={handleSave} 
                colorScheme="green" 
                disabled={editText.trim() === ''}
            >
                保存
            </BaseButton>
            <BaseButton onClick={onCancel} colorScheme="gray">キャンセル</BaseButton>
        </Flex>
    )
}