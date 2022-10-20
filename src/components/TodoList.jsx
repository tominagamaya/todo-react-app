import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState("");

  return (
    <>
      <div>Todo List</div>
      <form>
        <div>
          <label>タスク名</label>
          <input id="todo" />
        </div>
        <div>
          <label>期日</label>
          <input id="date" />
        </div>
        <div>
          <button id="submit">追加</button>
        </div>
      </form>
      <div>
        <table>
          <tr>
            <th>タスク名</th>
            <th>期日</th>
            <th>ステータス</th>
            <th></th>
          </tr>
          <tr>
            <td>洗濯をする</td>
            <td>2022-10-14</td>
            <td>未着手</td>
            <td>
              <button>削除</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default TodoList;