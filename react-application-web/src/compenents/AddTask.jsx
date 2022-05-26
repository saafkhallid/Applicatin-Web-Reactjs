import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState("false");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please add a task");
      return;
    }
    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder("false");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Task"
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add Day & Time"
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Reminder</label>
        <input
          type="checkbox"
          value={reminder}
                  onChange={(e) => setReminder(e.currentTarget.checked)}
                  checked={reminder}
          name=""
          id=""
          placeholder="Add Reminder"
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
