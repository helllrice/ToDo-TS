import React from "react";
import {TodoItem} from "./TodoItem";
import {ITodo} from "../types/data";

interface ITodoList {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;

}

export const TodoList:  React.FC<ITodoList> = (props) => {
    const {
        items,
        toggleTodo,
        removeTodo
    } = props

    return <div>
        {items.map(todo =>
            <TodoItem
                key={todo.id}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                {...todo}
            />
        )}
    </div>
}