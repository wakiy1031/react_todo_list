import { useState, useMemo } from 'react';

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

    const toggleTodoCompletion = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    const todoCounts = useMemo(() => {
        const total = todos.length;
        const completed = todos.filter(todo => todo.completed).length;
        const uncompleted = total - completed;
        return { total, completed, uncompleted };
    }, [todos]);

    return { inputValue, todos, onChangeTodoText, onClickAdd, onClickDelete, toggleTodoCompletion, todoCounts }
}