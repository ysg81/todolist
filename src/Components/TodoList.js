import React from 'react'
import TodoRow from './TodoRow'

const TodoList = ({ todoList, handleClickRemove }) => {
    return (
        <div>
            {todoList.map((todo, index) => (
                <TodoRow
                    todo={todo}
                    key={index}
                    index={index}
                    handleClickRemove={handleClickRemove}
                ></TodoRow>
            ))}
        </div>
    )
}


export default TodoList
