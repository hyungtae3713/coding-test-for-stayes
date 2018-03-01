import React from 'react';

import { TodoItem } from 'components';

const TodoList = ({ list = [], ...rest }) => {
    
    return (
        <div>
            { list.map(todo => {
                todo = todo.toJS();
                return <TodoItem key={todo.id} {...todo} {...rest}/>
            })}
        </div>
    );
};

export default TodoList;