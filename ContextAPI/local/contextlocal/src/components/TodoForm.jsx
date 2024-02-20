import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();

        if (!todo) return;

        addTodo({ todo, completed: false });
        setTodo("");
    };

    return (
        <form onSubmit={add} style={{ display: 'flex',
        // justifyContent: 'center'
         }}>
            <input
            className='manage'
                type="text"
                placeholder="Write Todo..."
                style={{
                    width: '300px',
                    borderWidth: '1px',
                    borderColor: '#000000',
                    borderTopLeftRadius: '0.5rem',
                    borderBottomLeftRadius: '0.5rem',
                    paddingLeft: '0.75rem',
                    paddingRight: '0.75rem',
                    outline: 'none',
                    transitionDuration: '150ms',
                    backgroundColor: '#ffffff',
                    paddingTop: '0.375rem',
                    paddingBottom: '0.375rem',
                }}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                style={{
                    borderTopRightRadius: '0.5rem',
                    borderBottomRightRadius: '0.5rem',
                    paddingLeft: '0.75rem',
                    paddingRight: '0.75rem',
                    backgroundColor: '#34d399',
                    color: '#ffffff',
                    flexShrink: 0,
                    
                }}
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
