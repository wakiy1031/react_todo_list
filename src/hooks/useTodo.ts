import { useState } from 'react';

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
}

export const useTodo = () => {
    const [inputValue, setInputValue] = useState("")
    const [todos, setTodos] = useState<Todo[]>([])

    const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const onClickAdd = () => {
        if (inputValue.trim() !== "") {
            const newTodo: Todo = {
                id: todos.length + 1,
                text: inputValue,
                completed: false
            }
            setTodos([...todos, newTodo])
            setInputValue("")
        }
    }

    const onClickDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return { inputValue, todos, onChangeTodoText, onClickAdd, onClickDelete }
}