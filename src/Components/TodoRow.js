import React, {Component} from 'react'
import './TodoRow.css'

class TodoRow extends Component{
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.todo === nextProps.todo){
            return false;
        }
        return true;
    }
    render(){
        const{index, todo, handleClickRemove} = this.props;
        return(
            <div className="textContainer">
                <div className="text">
                    {todo} 
                </div>
                <button 
                    className="buttonstyle"
                    onClick={() => handleClickRemove(index)}>
                    X
                </button>
            </div>
        )
    }
}

export default TodoRow