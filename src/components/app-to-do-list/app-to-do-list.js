import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import ToDoItem from '../app-to-do-item/app-to-do-item';

import './app-to-do-list.css';

const ToDoList = ({data, onDelete, onToggleAsap, onToggleDone}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CSSTransition
                key={id}
                timeout={500}
                classNames="item">
                <ToDoItem
                    key={id}
                    /*task={item.task}*/
                    {...itemProps} // spread
                    onRemove={() => onDelete(id)}
                    onProgress={() => onToggleAsap(id)}
                    onComplete={() => onToggleDone(id)}/> 
            </CSSTransition>
        )
    })

    return (
        <ul className="app-list list-group">
            <TransitionGroup>
                {elements}
            </TransitionGroup> 
        </ul>
    )
}

export default ToDoList;