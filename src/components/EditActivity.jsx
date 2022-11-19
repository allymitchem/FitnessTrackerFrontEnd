import React, { useState } from "react";
import { updateActivityRoutine } from "../api";
const EditActivity = (props) => {
	const routineActivities = props.routineActivities
	console.log(routineActivities, 'this is routineActs')
	const routineActivity = props.routineActivity
	const setRoutineActivities = props.setRoutineActivities
	console.log(setRoutineActivities, 'this is setRoutineActs')
	console.log(routineActivity, 'this is routineActivity')
	console.log(routineActivities, 'this is routine Activities')
	const [count, setCount] = useState('')
	const [duration, setDuration] = useState('')
	const [formDetails, setFormDetails] = useState({
    count: "",
    duration: "",
});
//   function handleUpdate(e) {
//     e.preventDefault();
//     const toUpdate = e.target.name;
//     const update = e.target.value;
//     const updatedForm = { ...formDetails, [toUpdate]: update };
//     setFormDetails(updatedForm);
//   }
  async function handleSubmit(e) {
	  
	  e.preventDefault();
	  const token = localStorage.getItem("token");
	  console.log(token, 'this is token')
	// const routineActivityIdValue = (formDetails.routineActivity.id)
	const countValue = (formDetails.count)
	const durationValue = (formDetails.duration)
    const changedActivity = await updateActivityRoutine(
		token,
		countValue,
		durationValue,
		routineActivity.routineActivityId,
		
    );
	const editedActivity = routineActivities.map((routineThing)=>{
		console.log(routineThing, 'this is routineThing')
		console.log(changedActivity, 'this is changedActivity')
		const condition = routineThing.routineActivityId == changedActivity.id
		
		return condition ? changedActivity : routineThing

	})
	setRoutineActivities(editedActivity)
	console.log(token, countValue, durationValue, routineActivity.id)
	console.log(changedActivity, 'this is changed activity')
	console.log(updateActivityRoutine, 'this is updateActRout')
  }
  return(
	<form onSubmit={handleSubmit}>
		<div>
			<label>Count: </label>
			<input type="text" value={formDetails.count} onChange={(e)=>{
				setFormDetails({...formDetails, count: e.target.value})
			}}/>
			<label>Duration: </label>
			<input name="duration" value={formDetails.duration} onChange={(e)=>{
				setFormDetails({...formDetails, duration: e.target.value})
			}}/>
			<button type="submit">Submit</button>
		</div>

	</form>
  );
};

export default EditActivity;
