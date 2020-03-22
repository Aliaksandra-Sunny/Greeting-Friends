import React from 'react';
import style from "./TodoListFooter.module.css"

class TodoListFooter extends React.Component {

    state = {
        isHidden: false,
    };

    componentDidMount() {
    }

    onShowFiltersClick = () => {
        this.setState({
                isHidden: false,
            }
        )
    };
    onHideFiltersClick = () => {
        this.setState({
                isHidden: true,
            }
        )
    };

    onAllFilterClick = () => {
        this.props.changeFilter("All");
    };
    onCompletedFilterClick = () => {
        this.props.changeFilter("Completed");
    };
    onActiveFilterClick = () => {
        this.props.changeFilter("Active");
    };

    render = () => {
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";
        return (
            <div className={style.todoListFooter}>
                {!this.state.isHidden && <span onClick={this.onHideFiltersClick}>hide</span>}
                {this.state.isHidden && <span onClick={this.onShowFiltersClick}>show</span>}
                {
                    !this.state.isHidden &&
                    <div>
                        <span>Filters: </span>
                        <button className={style[classForAll]} onClick={this.onAllFilterClick}>All</button>
                        <button className={style[classForCompleted]} onClick={this.onCompletedFilterClick}>Completed
                        </button>
                        <button className={style[classForActive]} onClick={this.onActiveFilterClick}>Active</button>
                    </div>
                }
            </div>
        );
    };
}

export default TodoListFooter;

