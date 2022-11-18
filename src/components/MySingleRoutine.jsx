import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { updateRoutine, deleteRoutine } from "../api";
import ActivityRoutine  from './ActivityRoutine'

const MySingleRoutine = (props) => {
  
  const routine = props.routine;
  console.log(routine, "this is routine")
  const myRoutines = props.myRoutines;
  const setMyRoutines = props.setMyRoutines;
  const activities = props.activities
  const setActivities = props.setActivities
  const user = localStorage.getItem("user");
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

  async function handleDelete(e){
    e.preventDefault()
    const toDelete = e.target.id
    const deleted = await deleteRoutine(token, toDelete)
    
    if (deleted.success){
      const updatedRoutines = myRoutines.filter((routine)=>{
       if (routine.id == deleted.id){
        return false
       }
      return true
    })
    
      // const bob = deletedThing.id == deletedRoutine.id
      // return (bob ? deleted : deletedThing)
      setMyRoutines(updatedRoutines)
    }

  }
  async function handleSubmit(e) {
    e.preventDefault();
    const editedRoutine = await updateRoutine(token, formDetails, routine.id);
	const updatedRoutines = myRoutines.map((routineThing)=>{
		
		const condition = routineThing.id == editedRoutine.id
		return ( condition ? editedRoutine : routineThing )
	}) 
    console.log(updatedRoutines);
    setMyRoutines(updatedRoutines);
    // console.log(setMyRoutines)
  }

  

  return (
    <div className="myRoutines">
      <div>
        <b>Routine Name:</b> {routine.name}
      </div>
      <div>
        <b>Goal:</b> {routine.goal}{" "}
      </div>
      {/* <div>
        <b>Public?</b> {routine.isPublic}
      </div> */}

      <div>
       
      </div>
      <ActivityRoutine myRoutines={myRoutines} setMyRoutines={setMyRoutines} routine={routine} activities={activities} setActivities={setActivities} />
      <form onSubmit={handleSubmit}>
        <p>Edit post below</p>
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={formDetails.name}
            onChange={handleChange}
          />
          <label>Goal</label>
          <input
            name="goal"
            type="text"
            value={formDetails.goal}
            onChange={handleChange}
          />
          {/* <label>Public</label> */}
          {/* <select>
							<option defaultValue={formDetails.isPublic}></option>
							<option value={false}>No</option>
							<option value={true}>Yes</option>
						</select>  */}
          <button type="submit">Submit</button>
          <br></br>
          <button id={routine.id} onClick={handleDelete}>Delete Post</button>
        </div>
      </form>
    </div>
  );
};

export default MySingleRoutine;
