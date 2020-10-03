import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = () => {
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: ["test user"],
  });

  function onChangeUsername(e) {
    const newState = {
      username: e.target.value,
      description: exercise.description,
      duration: exercise.duration,
      date: exercise.date,
      users: exercise.users,
    };
    setExercise(newState);
  }

  function onChangeDescription(e) {
    const newState = {
      username: exercise.username,
      description: e.target.value,
      duration: exercise.duration,
      date: exercise.date,
      users: exercise.users,
    };
    setExercise(newState);
  }

  function onChangeDuration(e) {
    const newState = {
      username: exercise.username,
      description: exercise.description,
      duration: e.target.value,
      date: exercise.date,
      users: exercise.users,
    };
    setExercise(newState);
  }

  function onChangeDate(date) {
    const newState = {
      username: exercise.username,
      description: exercise.description,
      duration: exercise.duration,
      date: date,
      users: exercise.users,
    };
    setExercise(newState);
  }

  function onSubmit(e) {
    e.preventDefault();

    const newExercise = {
      username: exercise.username,
      description: exercise.description,
      duration: exercise.duration,
      date: exercise.date,
    };

    console.log(exercise);
  }

  return (
    <div>
      <h3>Create New Exercise log </h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select onChange={onChangeUsername}>
            {exercise.users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            value={exercise.description}
            onChange={onChangeDescription}
          />
        </div>

        <div className="form-group">
          <label>Duration: </label>
          <input
            type="text"
            value={exercise.duration}
            onChange={onChangeDuration}
          />
        </div>

        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={exercise.date} onChange={onChangeDate} />
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Create Exercise Log" />
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
