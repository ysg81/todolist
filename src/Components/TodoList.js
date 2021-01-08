import React from 'react'
import styled from "styled-components"
import TodoRow from './TodoRow'

const TodoList = ({ todoList, handleClickRemove }) => {
    return (
        <div>
            <Container>{todoList.map((todo, index) => (
                <TodoRow
                    todo={todo}
                    key={index}
                    index={index}
                    handleClickRemove={handleClickRemove}
                ></TodoRow>
            ))}</Container>
        </div>
    )
}

const Container = styled.div``;

export default TodoList
