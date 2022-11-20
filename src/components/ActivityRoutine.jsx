import React, { useState } from "react";
import { AddRoutineActivity } from "../api";

const ActivityRoutine = (props) => {
  const [activityId, setActivityId] = useState("");
  const [duration, setDuration] = useState("");
  const [count, setCount] = useState("");
  const routine = props.routine;
  const routineId = routine.id;
  const activities = props.activities;
  const routineActivities = props.routineActivities;
  const setRoutineActivities = props.setRoutineActivities;

  async function handleAdd(e) {
    e.preventDefault();
    const activityIdValue = Number(activityId);
    const countValue = Number(count);
    const durationValue = Number(duration);

    const toAddActivity = await AddRoutineActivity(
      routineId,
      activityIdValue,
      countValue,
      durationValue
    );

    if (!toAddActivity.error) {
      setRoutineActivities([...routineActivities, toAddActivity]);
    }
  }

  return (
    <div id="addActivityToR">
      <h3>Add an activity to routine</h3>
      <form id="addActivityToRoutine" onSubmit={handleAdd}>
        <select
          onChange={(e) => {
            setActivityId(e.target.value);
          }}
        >
          <option>--Select an option---</option>
          {activities && activities.length
            ? activities.map((activity) => {
                return (
                  <option
                    value={activity.id}
                    key={`routine-activity${activity.id}`}
                  >
                    {activity.name}
                  </option>
                );
              })
            : null}
        </select>
        <p>
          <label htmlFor="duration">
            Duration:{" "}
            <input
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value);
              }}
              required
            ></input>
          </label>
        </p>
        <p>
          <label htmlFor="count">
            Count:{" "}
            <input
              value={count}
              onChange={(e) => {
                setCount(e.target.value);
              }}
              required
            ></input>{" "}
          </label>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ActivityRoutine;
