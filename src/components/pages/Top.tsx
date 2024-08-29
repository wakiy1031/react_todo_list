import { FC } from 'react'
import { AddTodo } from '../molecules/AddTodo'
import { TodoList } from '../molecules/TodoList'
import { useTodo } from '../../hooks/useTodo'

export const Top: FC = () => {
    const { inputValue, todos, onChangeTodoText, onClickAdd, onClickDelete } = useTodo()

    return (
        <div>
            <h1>TODO App</h1>
            <AddTodo
                inputValue={inputValue}
                onChangeTodoText={onChangeTodoText}
                onClickAdd={onClickAdd}
            />
            <TodoList todos={todos} onClickDelete={onClickDelete} />
        </div>
    )
}
