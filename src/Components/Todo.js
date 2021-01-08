import React, { Component } from 'react';
import './Todo.css'
import TodoList from './TodoList';

class Todo extends Component {
    state = {
        todoList:[]
    }

    componentDidMount(){
        this.setState({
            todoList: JSON.parse(localStorage.getItem("todoList")) || []
        });
    }

    render() {
        return (
            <div className="todoContainer">
                <input
                    className = "todo"
                    placeholder="오늘 할 일"
                    onKeyPress={this.handleInputKeyPress}>
                </input>
                <TodoList todoList={this.state.todoList} handleClickRemove={this.handleClickRemove}></TodoList>
            </div>
        );
    }

    handleInputKeyPress = event => {
        const {
          target: { value }
        } = event;
        if (event.key === "Enter") {
          this.setState(
              state => ({todoList: [...state.todoList, value]}),
              ()=>
              localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
          )
          event.target.value = "";
        }
    };

    handleClickRemove = index => {
        if(window.confirm("목록에서 삭제하시겠습니까?")){
            this.setState(
                state => ({
                    todoList:[
                        ...state.todoList.slice(0,index),
                        ...state.todoList.slice(index+1)
                    ]
                }),
                () =>
                localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
            )
        }
    }
}


export default Todo;