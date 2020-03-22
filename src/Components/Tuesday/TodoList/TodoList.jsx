import React from 'react';
import style from './TodoList.module.css';
import TodoListHeader from "./TodoListHeader/TodoListHeader";
import TodoListTasks from "./TodoListTasks/TodoListTasks";
import TodoListFooter from "./TodoListFooter/TodoListFooter";
import {saveState} from "../../../js/saveState";
import {restoreState} from "../../../js/restoreState";


class TodoList extends React.Component {

    state = {
        tasks: [],
        filterValue: "All",
    };
    priority = ["low", "medium", "high"];

    componentDidMount() {
        this.restoreState();
    }


    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: "All",
        };
        state = restoreState("our-state", state);
        this.setState(state);
    };


    addTask = (newTitle) => {           //add new task (props for header)

        let newId = (this.state.tasks != 0) ? this.state.tasks[this.state.tasks.length - 1].id + 1 : 0;
        let newTask = {
            id: newId,
            title: newTitle,
            isDone: false,
            priority: "low"
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
                tasks: newTasks,
            },
            () => {
                saveState("our-state", this.state)
            }
        );
    };

    changeFilter = (newFilterValue) => {        //change what tasks to show (props for footer)
        this.setState({
                filterValue: newFilterValue,
            },
            () => {
                saveState("our-state", this.state)
            }
        )
    };

    changeTitle = (id, newTitle) => {       //edit title by click on ToDoListTasks(props)
        this.changeTask(id, {title: newTitle});
    };

    changePriority = (id, newPriority) => {
        this.changeTask(id, {priority: newPriority});
    }

    changeStatus = (id, isDone) => {        //change checkbox of task (props for ToDoListTasks)
        this.changeTask(id, {isDone: isDone});
    };

    changeTask = (id, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== id)
                return t;
            else
                return {...t, ...obj};
        });
        this.setState({
                tasks: newTasks,
            },
            () => {
                saveState("our-state", this.state)
            })
    };

    deleteItem = (id) => {
        debugger
        let newTasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({
                tasks: newTasks,
            },

            () => {
                saveState("our-state", this.state)
            })
    };


    render = () => {
        return (
            <div className={style.todoList}>
                <TodoListHeader addTask={this.addTask}/>
                <TodoListTasks changePriority={this.changePriority} deleteItem={this.deleteItem}
                               changeStatus={this.changeStatus} changeTitle={this.changeTitle}
                               tasks={this.state.tasks.filter(t => {
                                       switch (this.state.filterValue) {
                                           case "Completed":
                                               return t.isDone === true;
                                           case "Active":
                                               return t.isDone === false;
                                           default:
                                               return true;
                                       }
                                   }
                               )
                               }/>
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>
        );
    }
}

export default TodoList;
