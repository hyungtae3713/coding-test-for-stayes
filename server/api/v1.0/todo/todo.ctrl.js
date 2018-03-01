import { join } from 'path';
import { readFileSync } from 'fs';
import { findIndex } from 'lodash';
import * as Excel from 'exceljs';

import { HTTP_STATUS } from '../../../lib/constants';
import { validate } from '../../../lib/validators';

export function gets(req, res, next) {
  if(req.query.import) {
    const filePath = join(__dirname, '../../../dummies/todos.js');
    const todos = JSON.parse(readFileSync(filePath, 'utf8'));

    req.app.locals.todos = todos;
    return res.json(todos);
  }

  res.json(req.app.locals.todos);
}

export function create(req, res, next) {
  const todo = req.body;
  const todos = req.app.locals.todos;
  
  if(!todo || !validate('todo', todo)) {
    return res.status(HTTP_STATUS.BAD_REQUEST).end();
  }
  
  todos.push(todo);

  res.status(HTTP_STATUS.CREATED).json(todo);
}

export function update(req, res, next) {
  const todo = req.body;
  let todos = req.app.locals.todos;

  if(!todo) {
    return res.status(HTTP_STATUS.BAD_REQUEST).end();
  }

  req.app.locals.todos = todos = todos.map((_todo, idx) => ((_todo.id === todo.id) ? { ...todo } : _todo));

  res.json(todo);
}

export function remove(req, res, next) {
  const id = req.params.id;
  const todos = req.app.locals.todos;
  
  if(!id) {
    return res.status(HTTP_STATUS.BAD_REQUEST).end();
  }
  
  const index = findIndex(todos, { id });
  todos.splice(index, 1);

  res.json(id);
}

export function download(req, res, next) {
  const type = req.query.type;
  const filename = req.query.filename;
  
  if(type !== 'excel') {
    return res.status(HTTP_STATUS.NOT_ACCEPTABLE).end();
  }

  res.header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.header(`Content-Disposition', 'attachment;filename=${filename}`);

  const workbook = new Excel.stream.xlsx.WorkbookWriter({ stream: res });
  const worksheet = workbook.addWorksheet('todos');

  worksheet.columns = [
    { header: 'ID', key: 'id' },
    { header: 'TEXT', key: 'text' },
    { header: 'COMPLETED', key: 'completed' }
  ];

  const todos = req.app.locals.todos;

  todos.forEach(todo => {
    worksheet.addRow({ id: todo.id, text: todo.text, completed: `${todo.completed}` }).commit();
  });
  
  worksheet.commit();

  workbook.commit().then(function() {
    res.end();
  });
}