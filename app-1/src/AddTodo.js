import React, {useState} from 'react';

const AddTodo = (props) => {
    const [newTodo, setNewTodo] = useState('');

    function handleAddTodo(e){
        e.preventDefault()
        console.log(newTodo)
        props.addToList(newTodo)
        setNewTodo('')
    }

    return(
        <form onSubmit={(e) => handleAddTodo(e)}>
            <input placeholder='New Todo Here' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}

export default AddTodo;