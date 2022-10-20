import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Todo List</h1>
      <button type="button">
        <Link to="/todolist">クリックしてください</Link>
      </button>
    </>
  )
}
export default Home;