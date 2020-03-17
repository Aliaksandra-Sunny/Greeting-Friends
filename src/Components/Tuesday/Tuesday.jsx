import React from 'react';
import style from './Tuesday.module.css';
import TodoList from "./TodoList/TodoList";

class Tuesday extends React.Component {

    render = () => {
        return (
            <div className={style.tuesday}>
              <TodoList/>
            </div>
        );
    }
}

export default Tuesday;
