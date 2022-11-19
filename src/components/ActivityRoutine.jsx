import React, { useState } from "react";
import { AddRoutineActivity , deleteActivityRoutine} from "../api";

const ActivityRoutine = (props) => {
  const [activityId, setActivityId] = useState("");
  const [duration, setDuration] = useState("");
  const [count, setCount] = useState("");
  const [myActivities, setMyActivities] = useState([]);
  const [name, setName] = useState("");
  const myRoutines = props.myRoutines;
  const setMyRoutines = props.setMyRoutines;
  const routine = props.routine;
  const routineId = routine.id;
  const activities = props.activities;
  const routineActivities = props.routineActivities;
  const setRoutineActivities = props.setRoutineActivities;

  const setActivities = props.setActivities;
  async function handleAdd(e) {
    e.preventDefault();
    const activityIdValue = Number(activityId);
    const countValue = Number(count);
    const durationValue = Number(duration);
	// console.log(activities.activity, 'this is activities')
	
		// const updatedActivities = activities.filter((activity) => {
		//   if (activity.name== name) {
		// 	return false;
		//   }
		//   return true;
		// })};
    const toAddActivity = await AddRoutineActivity(
      routineId,
      activityIdValue,
      countValue,
      durationValue
    );
// console.log(toAddActivity, 'this is toAddactivity')
    //need to add activities to routines update of state?
	// console.log(name, 'this is name')
// const newRoutineActivity = {name:name, duration:toAddActivity.duration, id:toAddActivity.id, count:toAddActivity.count}
    if (!toAddActivity.error) {
      setRoutineActivities([...routineActivities, toAddActivity]);
    } }
  
    

  return (
    <div>
      <h4>Add an activity to routine</h4>
      <form onSubmit={handleAdd}>
        <select
          onChange={(e) => {
            setActivityId(e.target.value);
            // setName(e.target.name)
			// console.log(e.target.value,'this is e.target')
          }}
        >
          <option>--Select an option---</option>
          {activities && activities.length
            ? activities.map((activity) => {
                return (
                  <option
				    // value={activity.name}
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
