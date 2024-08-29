import { FC } from 'react'
import { Todo } from '../../hooks/useTodo'

type Props = {
    todos: Todo[]
}

export const TodoList: FC<Props> = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    )
}