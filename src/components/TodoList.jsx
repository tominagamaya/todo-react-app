import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import '../App.css';

const TodoList = () => {
  const [tasks, setTask] = useState([]);
  
  useEffect(() => {
    setTask([{id: 1, title: '洗濯する', date: "2022-10-21", state: 1},
    {id: 2, title: '卵を買う', date: "2022-10-22", state: 2}
    ]);
  }, []);

  const handleChange = (targetId, event) => {
    const updateTasks = [];
    tasks.map((value) => {
      if (value.id === targetId) {
        updateTasks.push({id: value.id, title: value.title, date: value.date, state: event.target.value})
      } else {
        updateTasks.push(value);
      }
    })
    setTask(updateTasks);
  }

  const addTask = () => {
    //todo: useRefを使う
    const title = document.getElementById("todo").value;
    const date = document.getElementById("date").value;
    setTask([...tasks, {id: tasks.length + 1, title: title, date: date, state: 1}]);
  }

  const deleteTask = (deleteId) => {
    const updateTasks = tasks.filter((value) => value.id !== deleteId);
    setTask(updateTasks);
  }

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <form className="todo-input-form">
        <div>
          <FormLabel sx={{ fontSize: 14, padding: 2 }}>タスク名</FormLabel>
          <TextField id="todo" size="small" stype="text" variant="outlined" sx={{ height: 20 }} />
        </div>
        <div>
          <FormLabel sx={{ fontSize: 14, padding: 2 }}>期日</FormLabel>
          <TextField id="date" size="small" type="date" variant="outlined" />
        </div>
        <div className="todo-input-content">
          <Button id="submit" color="success" variant="contained" sx={{ marginLeft: 3 }} onClick={addTask}>追加</Button>
        </div>
      </form>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">タスク名</TableCell>
                <TableCell align="center">期日</TableCell>
                <TableCell align="center">ステータス</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.title}</TableCell>
                  <TableCell align="center">{task.date}</TableCell>
                  <TableCell align="center">
                    <Select
                      id="todo-state"
                      value={task.state}
                      onChange={(e) => handleChange(task.id, e)}
                      sx={{ fontSize: 14, height: 40, width: 90 }}
                    >
                      <MenuItem value={1}>未着手</MenuItem>
                      <MenuItem value={2}>着手中</MenuItem>
                      <MenuItem value={3}>完了</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" color="error" onClick={() => deleteTask(task.id)}>削除</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default TodoList;