import { useState } from "react";
import TodoItem from "./TodoItem";

function Todo(props) {
    //const todoItems = props.todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />);
    const [todoItems, setTodoItems] = useState(props.todoList);
    const [inputText, setInputText] = useState("");
    function deleteTodo(id) {
        let remainingTodos = todoItems.filter((todo) => todo.id != id);
        setTodoItems(remainingTodos);
    }
    function editTodo(id, newTodo) {
        let updatedTodos = todoItems.map((todo) => {
            if(todo.id === id) todo.data = newTodo;
            return todo;
        });
        setTodoItems(updatedTodos);
    }
    return (
        <>
            <input 
                type="text" 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)} 
            />
            <button 
                onClick={() => setTodoItems([...todoItems, {data: inputText, id: todoItems[todoItems.length-1].id+1}])}
            >Add todo</button>
            <ul> 
                {todoItems.map((todo) => <TodoItem 
                                            todo={todo}
                                            key={todo.id} // id: 1
                                            delete={() => deleteTodo(todo.id)} 
                                            edit={(newTodo) => editTodo(todo.id, newTodo)}
                                            />)} 
            </ul>
        </>
    )
}

export default Todo;