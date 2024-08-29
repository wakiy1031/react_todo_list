import { FC, useState } from 'react'
import { Todo } from '../../hooks/useTodo'
import { BaseButton } from '../atoms/button/BaseButton'
import { Flex, Box } from '@yamada-ui/layouts'
import { Checkbox } from '@yamada-ui/checkbox'
import { useDisclosure } from '@yamada-ui/react'
import { ConfirmDialog } from './ConfirmDialog'

type Props = {
    todos: Todo[]
    onClickDelete: (id: number) => void
    toggleTodoCompletion: (id: number) => void
}

export const TodoList: FC<Props> = ({ todos, onClickDelete, toggleTodoCompletion }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [todoToDelete, setTodoToDelete] = useState<number | null>(null)

    const handleDeleteClick = (id: number) => {
        setTodoToDelete(id)
        onOpen()
    }

    const handleConfirmDelete = () => {
        if (todoToDelete !== null) {
            onClickDelete(todoToDelete)
            setTodoToDelete(null)
            onClose()
        }
    }

    return (
        <Box>
            {todos.map((todo) => (
                <Flex key={todo.id} gap="md" alignItems="center" mb="2">
                    <Checkbox
                        isChecked={todo.completed}
                        onChange={() => toggleTodoCompletion(todo.id)}
                    />
                    <Box as="span" textDecoration={todo.completed ? 'line-through' : 'none'}>
                        {todo.text}
                    </Box>
                    <BaseButton onClick={() => handleDeleteClick(todo.id)} colorScheme="red">削除</BaseButton>
                </Flex>
            ))}

            <ConfirmDialog
                isOpen={isOpen}
                onClose={onClose}
                onConfirm={handleConfirmDelete}
                message="本当によろしいですか？"
            />
        </Box>
    )
}