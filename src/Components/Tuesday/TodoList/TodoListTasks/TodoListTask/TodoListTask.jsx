import React from 'react';
import style from "./TodoListTask.module.css"
import PropTypes from "prop-types";
import Button from "../../../../Monday/Friends/Greeting/Button/Button";

class TodoListTask extends React.Component {

    state = {
        editMore: false,
        priorityChange: false,
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

    activateChangePrior = () => {
        this.setState({
            priorityChange: true,
        })
    };

    deactivateChangePrior = () => {
        this.setState({
            priorityChange: false,
        })
    };

    changePriority = (e) => {
        this.props.changePriority(this.props.task.id, e.currentTarget.value);
    };

    changeTitle = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };
    deleteItem = (e) => {
        this.props.deleteItem(this.props.task.id);
    };

    render = () => {
        return (
            <div
                className={this.props.task.isDone ? `${style["todoList-task"]} ${style["done"]}` : `${style["todoList-task"]}`}>
                <input type="checkbox" onChange={this.onIsDoneChanged} checked={this.props.task.isDone}/>
                <div className={style.data}>
                    {this.state.editMore
                        ?
                        <input type="text" onBlur={this.deactivateEditMore} autoFocus={true} onChange={this.changeTitle}
                               value={this.props.task.title}/>
                        : <span onClick={this.activateEditMore}>{this.props.task.id} - {this.props.task.title}, </span>
                    }
                    {this.state.priorityChange ?
                        <select onChange={this.changePriority} value={this.props.task.priority} autoFocus={true}
                                onBlur={this.deactivateChangePrior}>
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                        : <span onClick={this.activateChangePrior}> priority: {this.props.task.priority}</span>
                    }
                </div>
                <Button func={this.deleteItem} name="Delete"/>
            </div>
        );
    }
}

export default TodoListTask;

TodoListTask.propTypes = {
    isDone: PropTypes.bool,
    priority: PropTypes.string
}