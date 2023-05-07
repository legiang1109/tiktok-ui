import React, { useContext, useState } from "react";
import Input from "../input/input";
import AppContext from "../../context/AppContext";

const Task = ({ status, title, id }) => {
  const { onCompleteTodo, onDeleteTodo, onEditTodo } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [titleEdit, setTitleEdit] = useState(title);
  const handleOnEditTask = () => {
    onEditTodo(id, titleEdit);
    setIsEdit(false);
  };

  return (
    <div className="flex justify-start items-center my-4">
      <div className="rounded-full w-[20px] h-[20px] overflow-hidden border border-neutral-400">
        <input
          type="checkbox"
          className="appearance-none w-[20px] h-[20px] checked:bg-blue-500"
          value={status}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => {
            onCompleteTodo(id);
          }}
        />
      </div>
      <div className="flex justify-between w-full">
        {/* Không phải là edit task thì hiển thị tên */}
        {!isEdit ? (
          <div
            className={`pl-6 text-lg text-stone-950 ${
              status ? "line-through decoration-4" : ""
            }`}
          >
            {title}
          </div>
        ) : (
          /// nếu là edit task == true thì hiển thị ô input
          <div className="w-full ml-5">
            <form
              action=""
              onSubmit={() => {
                handleOnEditTask();
              }}
            >
              <Input
                value={titleEdit}
                onChangeInput={(value) => {
                  setTitleEdit(value);
                }}
              />
            </form>
          </div>
        )}
        {isEdit ? null : (
          <div>
            <button
              className="mr-5"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              cập nhật
            </button>
            <button
              onClick={() => {
                onDeleteTodo(id);
              }}
            >
              xóa
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
