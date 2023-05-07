import React, { useState, useEffect, useContext } from "react";
import Footer from "../components/Footer";
import Input from "../components/input/input";
import TaskList from "../components/TaskList/TaskList";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
const { v4: uuidv4 } = require("uuid");

function HomePage() {
  const { onAddTodo } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const onChangeTitle = (value) => {
    setTitle(value);
  };

  const handleLogout = () => {
    // logic hendleLogout
    navigate("/sign-in");
  };

  return (
    <div className="flex h-[100vh] justify-center items-center">
      <button className="absolute top-5 right-5" onClick={handleLogout}>
        Logout
      </button>
      <div className="mx-auto w-2/4 bg-white  p-6">
        <div className="w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onAddTodo(title);
              setTitle("");
            }}
          >
            <Input
              onChangeInput={onChangeTitle}
              value={title}
              placeholder={"Enter your task here..."}
            />
          </form>
        </div>
        <TaskList />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
