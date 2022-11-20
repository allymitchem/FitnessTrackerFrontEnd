import React, { useState } from "react";
import { updateActivityRoutine, deleteActivityRoutine } from "../api";
const EditActivity = (props) => {
  const routineActivities = props.routineActivities;

  const routineActivity = props.routineActivity;
  const setRoutineActivities = props.setRoutineActivities;


  const [formDetails, setFormDetails] = useState({
    count: "",
    duration: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const countValue = formDetails.count;
    const durationValue = formDetails.duration;
    const changedActivity = await updateActivityRoutine(
      token,
      countValue,
      durationValue,
      routineActivity.routineActivityId
    );
    changedActivity.name = routineActivity.name;
    const editedActivity = routineActivities.map((routineThing) => {
      const condition = routineThing.routineActivityId == changedActivity.id;

      return condition ? changedActivity : routineThing;
    });
    setRoutineActivities(editedActivity);
  }
  async function handleRemove(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const toDelete = e.target.id;

    const deleted = await deleteActivityRoutine(token, toDelete);

    if (deleted.success) {
      const updatedActivityRoutines = routineActivities.filter((activity) => {
        if (activity.routineActivityId == deleted.id) {
          return false;
        }
        return true;
      });

      setRoutineActivities(updatedActivityRoutines);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>
          <b>Edit activity below</b>
        </p>
        <span id="countDuration">
			
          <label>Count: </label>
          <input
            type="text"
            value={formDetails.count}
            onChange={(e) => {
              setFormDetails({ ...formDetails, count: e.target.value });
            }}
          />
        
        
          <label>Duration: </label>
          <input
            name="duration"
            value={formDetails.duration}
            onChange={(e) => {
              setFormDetails({ ...formDetails, duration: e.target.value });
            }}
          />
		  </span>
        
        
          <button id="editSubmit" type="submit">Submit</button>
        
      </div>
      <button id={routineActivity.routineActivityId} onClick={handleRemove}>
        Delete Activity
      </button>
    </form>
  );
};

export default EditActivity;
