import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import '../App.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="red">Todo List</h1>
        <Button variant="contained" color="success">
          <Link to="/todolist" className="button-link">クリックしてください</Link>
        </Button>
      </div>
    </div>
  )
}
export default Home;