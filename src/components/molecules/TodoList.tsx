import { FC } from 'react'
import { Todo } from '../../hooks/useTodo'
import { BaseButton } from '../atoms/button/BaseButton'
import { Flex, Box } from '@yamada-ui/layouts'
import { Checkbox } from '@yamada-ui/checkbox'

type Props = {
    todos: Todo[]
    onClickDelete: (id: number) => void
    toggleTodoCompletion: (id: number) => void
}

export const TodoList: FC<Props> = ({ todos, onClickDelete, toggleTodoCompletion }) => {
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
                    <BaseButton onClick={() => onClickDelete(todo.id)} colorScheme="red">削除</BaseButton>
                </Flex>
            ))}
        </Box>
    )
}