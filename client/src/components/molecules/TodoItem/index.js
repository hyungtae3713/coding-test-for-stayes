import React from 'react';
import { Input, Label, Icon } from 'components';

import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const TodoItem = ({ id, text , completed, onUpdateTodo, onDeleteTodo }) => {
  return (
    <form className={cx('todo-item')} noValidate>
        <div className="well well-sm">
            <div className="checkbox">
                <Label className={cx({ completed })}>
                    <Input type="checkbox" value={completed} defaultChecked={completed} onChange={(e) => onUpdateTodo(e, { id, text, completed: !completed })}/>
                    {text}
                </Label>
                <Icon 
                    type="remove" 
                    className={cx('position-absolute right-0 cursor-pointer')} 
                    onClick={(e) => onDeleteTodo(e, id) }/>
            </div>
        </div>
    </form>
  );
};

export default TodoItem;