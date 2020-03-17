import React from 'react';
import style from "./TodoListTask.module.css"
import PropTypes from "prop-types";;

class TodoListTask extends React.Component {

    state = {
        editMore: false,
    };

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };

    activateEditMore = () => {
        this.setState({
            editMore: true,
        })
    };

    deactivateEditMore = () => {
        this.setState({
            editMore: false,
        })
    };

    changeTitle=(e)=>{
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };

    render = () => {
        return (
            <div className={this.props.task.isDone ? `${style["todoList-task"]} ${style["done"]}` : `${style["todoList-task"]}`}>
                <input type="checkbox" onChange={this.onIsDoneChanged} checked={this.props.task.isDone}/>
                {this.state.editMore
                    ? <input type="text" onBlur={this.deactivateEditMore} autoFocus={true} onChange={this.changeTitle} value={this.props.task.title}/>
                    : <span onClick={this.activateEditMore}>{this.props.task.id} - {this.props.task.title}</span>
                }, priority: {this.props.task.priority}

            </div>
        );
    }
}

export default TodoListTask;

TodoListTask.propTypes = {
    isDone: PropTypes.bool,
    priority: PropTypes.string
}