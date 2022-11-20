import React, { useState } from "react";
import { updateRoutine, deleteRoutine } from "../api";
import ActivityRoutine from "./ActivityRoutine";
import EditActivity from "./EditActivity";

const MySingleRoutine = (props) => {
  const routine = props.routine;
  const [routineActivities, setRoutineActivities] = useState(
    routine.activities
  );
  const myRoutines = props.myRoutines;
  const setMyRoutines = props.setMyRoutines;
  const activities = props.activities;

  const token = localStorage.getItem("token");
  const [formDetails, setFormDetails] = useState({
    name: routine.name,
    goal: routine.goal,
  });
  function handleChange(e) {
    e.preventDefault();
    const toUpdate = e.target.name;
    const update = e.target.value;
    const updatedForm = {
      ...formDetails,
      [toUpdate]: update,
    };
    setFormDetails(updatedForm);
  }

  async function handleDelete(e) {
    e.preventDefault();
    const toDelete = e.target.id;
    const deleted = await deleteRoutine(token, toDelete);

    if (deleted.success) {
      const updatedRoutines = myRoutines.filter((routine) => {
        if (routine.id == deleted.id) {
          return false;
        }
        return true;
      });

      setMyRoutines(updatedRoutines);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const editedRoutine = await updateRoutine(token, formDetails, routine.id);
    const updatedRoutines = myRoutines.map((routineThing) => {
      const condition = routineThing.id == editedRoutine.id;
      return condition ? editedRoutine : routineThing;
    });

    setMyRoutines(updatedRoutines);
  }

  return (
    <div className="myRoutines">
      <div>
        <b>Routine Name:</b> {routine.name}
      </div>
      <div>
        <b>Goal:</b> {routine.goal}{" "}
      </div>

      <div>
        {routineActivities
          ? routineActivities.map((routineActivity) => {
              return (
                <div id="activities" key={`activity-id${routineActivity.id}`}>
                  <div className="myActivitiesList">
                    <b>Activity Name:</b> {routineActivity.name}
                  </div>

                  <div>
                    <b>Count:</b> {routineActivity.count}
                  </div>
                  <div>
                    <b>Duration:</b> {routineActivity.duration}{" "}
                  </div>

                  <EditActivity
                    myRoutines={myRoutines}
                    setMyRoutines={setMyRoutines}
                    routineActivities={routineActivities}
                    routineActivity={routineActivity}
                    setRoutineActivities={setRoutineActivities}
                  />
                </div>
              );
            })
          : null}
      </div>

      <ActivityRoutine
        id="addActivityToR"
        myRoutines={myRoutines}
        setMyRoutines={setMyRoutines}
        routine={routine}
        activities={activities}
        routineActivities={routineActivities}
        setRoutineActivities={setRoutineActivities}
      />
      <form id="editRoutine" onSubmit={handleSubmit}>
        <p>Edit Routine Below</p>
        <div>
          <p>
            <label>Name: </label>
            <input
              name="name"
              type="text"
              value={formDetails.name}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>Goal: </label>
            <input
              name="goal"
              type="text"
              value={formDetails.goal}
              onChange={handleChange}
            />
          </p>

          <p>
            <button type="submit">Submit</button>
          </p>

          <p>
            <button id={routine.id} onClick={handleDelete}>
              Delete Routine
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default MySingleRoutine;
