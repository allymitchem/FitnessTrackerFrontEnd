import React, { useState } from "react";
import { AddRoutineActivity } from "../api";

const ActivityRoutine = (props) => {
  const [activityId, setActivityId] = useState("");
  const [duration, setDuration] = useState("");
  const [count, setCount] = useState("");
  const [myActivities, setMyActivities]= useState([])
  console.log(myActivities, "this is my activities")
  const myRoutines = props.myRoutines;
  const setMyRoutines = props.setMyRoutines;
  const routine = props.routine;
  const routineId = routine.id;
  const activities = props.activities;
  const routineActivities = props.routineActivities
 const setRoutineActivities=props.setRoutineActivities
  const setActivities = props.setActivities;
//   const [formDetails, setFormDetails] = useState({
//     activityId: "",
//     count: "",
//     duration: "",
//   });

  
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
      console.log(toAddActivity, "is this successful?")
//need to add activities to routines update of state?

    if (!toAddActivity.error){
     setRoutineActivities([
      ...routineActivities,
       toAddActivity
     ])
    }
    ;
  }

  return (
    <div>
      <h3> RoutineActivity </h3>
      <form onSubmit={handleAdd}>
        <select onChange={(e)=>{
			setActivityId(e.target.value)
		}}>
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
        <label htmlFor="duration">
          Duration:{" "}
          <input
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
              ;
            }}
            required
          ></input>
        </label>
        <label htmlFor="count">
          Count:{" "}
          <input
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
              ;
            }}
            required
          ></input>{" "}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ActivityRoutine;
