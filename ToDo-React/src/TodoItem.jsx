import { useState } from "react";
import './TodoItem.css';

function TodoItem(props) {
    const [isEditting, setIsEditting] = useState(false);
    const [todoData, setTodoData] = useState(props.todo.data);
    return (
        <div>
            <li>
                {
                    (isEditting) ? 
                    <input type="text" value={todoData} onChange={(e) => setTodoData(e.target.value)} /> : <span>{todoData}</span> 
                }
               
            </li>
            <button onClick={() => { 
                props.delete();
            } 
            }>Done</button>
            <button onClick={() => {
                setIsEditting(!isEditting)
            }}>
                {(isEditting) ? 'Save' : 'Edit'}
            </button>
        </div>
    );
}

export default TodoItem;