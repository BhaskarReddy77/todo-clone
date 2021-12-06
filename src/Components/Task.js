import React, { useState } from "react";
import dateFnsFormat from "date-fns/format";
import "react-day-picker/lib/style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { setDate } from "date-fns";
import DayPicker from "react-day-picker";
import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";
import addDays from "date-fns/addDays";
import isToday from "date-fns/isToday";

const FORMAT = "dd/MM/yyyy";
function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

const AddTask = ({onCancel, onAddTask}) => {
  const [task, settask] = useState("");
  const [date, setdate] = useState(null);
  return (
    <div className="add-task-dialog">
      <input value={task} onChange={(event) => settask(event.target.value)} />
      <div className="add-task-actions-container">
        <div className="btns-container">
          <button
            disabled={!task}
            className="add-btn"
            onClick={() => {
              onAddTask(task, date);
              onCancel();
              settask("");
            }}
          >
            Add Task
          </button>
          <button
            className="cancel-btn"
            onClick={() => {
              onCancel();
              settask("");
            }}
          >
            Cancel
          </button>
        </div>
        <div className="icon-container">
          <DayPickerInput
            onDayChange={(day) => setdate(day)}
            placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
            formatDate={formatDate}
            format={FORMAT}
            dayPickerProps={{
              modifiers: {
                disabled: [
                  {
                    before: new Date(),
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

const TASKS_HEADER_MAPPING = {
  INBOX: "Inbox",
  TODAY: "Today",
  NEXT_7: "Next 7 Days",
};

const TaskItems = ({ selectedTab, tasks }) => {
  let tasksToRender = [...tasks];
  if (selectedTab === "NEXT_7") {
    tasksToRender = tasksToRender.filter(
      (task) =>
        isAfter(task.date, new Date()) &&
        isBefore(task.date, addDays(new Date(), 7))
    );
  }
  if (selectedTab === "TODAY") {
    tasksToRender = tasksToRender.filter((task) => isToday(task.date));
  }
  return (
    <div className="task-item-container">
      {tasksToRender.map((task) => (
        <div className="task-item">
          <p>{task.text}</p>
          <p>{dateFnsFormat(new Date(task.date), FORMAT)}</p>
        </div>
      ))}
    </div>
  );
};

const Task = ({ selectedTab }) => {
  const [showAddTask, setshowAddTask] = useState(false);
  const [tasks, settasks] = useState([]);

  const addNewTask = (text, date) => {
    const newTaskItem = { text, date: date || new Date() };
    settasks((prevState) => [...prevState, newTaskItem]);
  };
  return (
    <div className="tasks">
      <h1>{TASKS_HEADER_MAPPING[selectedTab]}</h1>
      {selectedTab === "INBOX" ? (
        <div
          className="add-task-btn"
          onClick={() => setshowAddTask((prevState) => !prevState)}
        >
          <span className="plus">+</span>
          <span className="add-task-text">Add Task</span>
        </div>
      ) : null}
      {showAddTask && (
        <AddTask
          onAddTask={addNewTask}
          onCancel={() => setshowAddTask(false)}
        />
      )}
      {tasks.length > 0 ? (
        <TaskItems tasks={tasks} selectedTab={selectedTab} />
      ) : (
        <p>No Task Yet</p>
      )}
    </div>
  );
};

export default Task;
