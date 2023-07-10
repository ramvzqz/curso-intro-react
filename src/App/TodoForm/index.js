import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const [ newTodoValue, setNewTodoValue ] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) =>  {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder='Cortar la cebolla para el almuerxo'
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cencelar
                </button>
                <button
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };