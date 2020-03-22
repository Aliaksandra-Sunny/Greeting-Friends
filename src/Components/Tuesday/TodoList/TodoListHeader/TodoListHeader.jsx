import React from 'react';
import PropTypes from "prop-types";
import style from "./TodoListHeader.module.css"
import Button from "../../../Monday/Friends/Greeting/Button/Button";

class TodoListHeader extends React.Component {

    state = {
        error: true,
        title: "",
    };

    changeInput = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value,
        });
    };

    onEnterPress = (e) => {
        if (e.key === "Enter")
            this.onAddTaskClick();
    };

    onAddTaskClick = () => {
        if (this.state.title !== "") {
            let newText = this.state.title;
            this.setState({
                error: true,
                title: "",
            })
            this.props.addTask(newText);
        } else {
            this.setState({
                error: false,
            });
        }
    };

    render = () => {
        return (
            <div className={style.todoListHeader}>
                <h3 className={style.title}>What to Learn?</h3>
                <div className="todoList-newTaskForm">
                    <input onKeyPress={this.onEnterPress} onChange={this.changeInput}
                           className={this.state.error === true ? `${style.error}` : ""}
                           value={this.state.title}
                           type="text" placeholder="New task name"/>
                    <Button func={this.onAddTaskClick} name="Add"/>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

TodoListHeader.propTypes = {
    onAddTaskClick: PropTypes.func
}