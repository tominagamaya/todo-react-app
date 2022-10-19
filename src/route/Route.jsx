import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import TodoList from "../components/TodoList";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

function Error() {
  return (
    <>
      <h2>存在しないページです</h2>
    </>
  );
};