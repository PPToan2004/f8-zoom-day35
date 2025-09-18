import { useState } from "react";

import styles from './Todo.module.scss';

let uniqId = 0;
function Todo() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, { id: ++uniqId, text: inputValue, completed: false }]);
            setInputValue('');
        }
    }
    const doneCount = todos.filter(t => t.completed).length;
    const remainCount = todos.length - doneCount;
    return (
        <div className={styles.wrapper}>
            <h1>List Task</h1>
            <ul>
                {todos.length === 0 ? (
                    <li>Chưa có task nào. Hãy thêm task đầu tiên!</li>
                ) : (
                    todos.map(todo => (
                        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => setTodos(todos.map(function (t) {
                                    return t.id === todo.id ? { ...t, completed: !t.completed } : t
                                }))}
                            />

                            <button onClick={() => setTodos(todos.filter(function (t) {
                                return t.id !== todo.id;
                            }))}>
                                Xóa
                            </button>
                        </li>
                    ))
                )
                }
            </ul>
            <div className={styles.task}>
                <div className="task-sum">Tổng : {todos.length} task(s) , Hoàn thành : {doneCount} task(s) , Còn lại : {remainCount} task(s)</div>
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    value={inputValue}
                    onChange={handleInputValue}
                    placeholder="Nhập task mới"
                />

                <button type="submit">Thêm</button>
            </form>
        </div>
    )
}

export default Todo;