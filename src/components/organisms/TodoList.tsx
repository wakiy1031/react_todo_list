import { FC, useState } from 'react'
import { Todo } from '../../hooks/useTodo'
import { BaseButton } from '../atoms/button/BaseButton'
import { Flex, Box } from '@yamada-ui/layouts'
import { Checkbox } from '@yamada-ui/checkbox'
import { useDisclosure, Text } from '@yamada-ui/react'
import { ConfirmDialog } from '../molecules/ConfirmDialog'
import { EditTodo } from '../molecules/EditTodo'

type Props = {
    todos: Todo[]
    onClickDelete: (id: number) => void
    toggleTodoCompletion: (id: number) => void
    onEditTodo: (id: number, newText: string) => void
}

export const TodoList: FC<Props> = ({ todos, onClickDelete, toggleTodoCompletion, onEditTodo }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [todoDeleteId, setTodoDeleteId] = useState<number | null>(null)
    const [editingTodoId, setEditingTodoId] = useState<number | null>(null)

    const handleDeleteClick = (id: number) => {
        setTodoDeleteId(id)
        onOpen()
    }

    const handleConfirmDelete = () => {
        if (todoDeleteId !== null) {
            onClickDelete(todoDeleteId)
            setTodoDeleteId(null)
            onClose()
        }
    }

    return (
        <Box>
            {todos.map((todo) => (
                <Flex key={todo.id} gap="md" alignItems="center" mb="2">
                    {editingTodoId === todo.id ? (
                        <Flex alignItems="center" width="100%">
                            <Box width="24px" /> {/* チェックボックスの幅分のスペース */}
                            <EditTodo
                                id={todo.id}
                                initialText={todo.text}
                                onSave={(id, newText) => {
                                    onEditTodo(id, newText)
                                    setEditingTodoId(null)
                                }}
                                onCancel={() => setEditingTodoId(null)}
                            />
                        </Flex>
                    ) : (
                        <>
                            <Checkbox
                                isChecked={todo.completed}
                                onChange={() => toggleTodoCompletion(todo.id)}
                            />
                            <Text
                                as="span"
                                textDecoration={todo.completed ? 'line-through' : 'none'}
                                title={todo.text}
                                width="300px"
                                overflow="hidden"
                                textOverflow="ellipsis"
                                whiteSpace="nowrap"
                            >
                                {todo.text}
                            </Text>
                            <BaseButton onClick={() => setEditingTodoId(todo.id)} colorScheme="blue">編集</BaseButton>
                            <BaseButton onClick={() => handleDeleteClick(todo.id)} colorScheme="red">削除</BaseButton>
                        </>
                    )}
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