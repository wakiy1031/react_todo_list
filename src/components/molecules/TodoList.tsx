import { FC } from 'react'
import { Todo } from '../../hooks/useTodo'
import { BaseButton } from '../atoms/button/BaseButton'
import { Flex } from '@yamada-ui/layouts'

type Props = {
    todos: Todo[]
    onClickDelete: (id: number) => void
}

export const TodoList: FC<Props> = ({ todos, onClickDelete }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Flex gap="md" alignItems="center">
                        <span>{todo.text}</span>
                        <BaseButton onClick={() => onClickDelete(todo.id)} colorScheme="danger">削除</BaseButton>
                    </Flex>
                </li>
            ))}
        </ul>
    )
}