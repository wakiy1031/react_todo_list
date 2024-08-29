import { FC } from 'react'
import { AddTodo } from '../molecules/AddTodo'
import { TodoList } from '../organisms/TodoList'
import { useTodo } from '../../hooks/useTodo'
import { Box, Text } from '@yamada-ui/react'

export const Top: FC = () => {
    const { inputValue, todos, onChangeTodoText, onClickAdd, onClickDelete, toggleTodoCompletion, onEditTodo, todoCounts } = useTodo()

    return (
        <Box>
            <h1>TODO App</h1>
            <Text mb="4">
                全てのタスク：{todoCounts.total} 完了済み：{todoCounts.completed} 未完了：{todoCounts.uncompleted}
            </Text>
            <AddTodo
                inputValue={inputValue}
                onChangeTodoText={onChangeTodoText}
                onClickAdd={onClickAdd}
            />
            <TodoList 
                todos={todos} 
                onClickDelete={onClickDelete} 
                toggleTodoCompletion={toggleTodoCompletion}
                onEditTodo={onEditTodo}
            />
        </Box>
    )
}