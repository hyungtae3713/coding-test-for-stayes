import React from 'react';
import { Input, Button } from 'components';

import styles from './TodoForm.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const TodoForm = ({ text, onImport, onExport, onChangeTodoText, onSubmit }) => {
  return (
    <form className={cx('todo-form')} onSubmit={onSubmit} noValidate>
        <div>
            <Input type="text" className={cx('text-input')} value={text} onChange={onChangeTodoText}/>
            <Button type="submit" color="default">만들기</Button>
            <div className={cx('import-export-group', 'pull-right')}>
                <Button color="primary" size="xs" onClick={onImport}>불러오기</Button>
                <Button color="danger" size="xs" onClick={onExport}>내보내기</Button>
            </div>
        </div>
    </form>
  );
};

export default TodoForm;