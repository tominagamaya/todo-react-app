import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import '../App.css';

const TodoList = () => {
  const [task, setTask] = useState("");

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
          <Button id="submit" color="success" variant="contained" sx={{ marginLeft: 3 }}>追加</Button>
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
              <TableRow>
                <TableCell>洗濯をする</TableCell>
                  <TableCell align="center">2022-10-14</TableCell>
                  <TableCell align="center">未着手</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="error">削除</Button>
                  </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default TodoList;