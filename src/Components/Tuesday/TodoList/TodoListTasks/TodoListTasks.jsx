import React from 'react';
import TodoListTask from "./TodoListTask/TodoListTask";
import PropTypes from "prop-types";

class TodoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map((task, index) => {
            return (
                <TodoListTask changePriority={this.props.changePriority} deleteItem={this.props.deleteItem} key={index}
                              changeTitle={this.props.changeTitle} changeStatus={this.props.changeStatus} task={task}/>
            )
        });
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

TodoListTasks.propTypes = {
    tasks: PropTypes.array
}