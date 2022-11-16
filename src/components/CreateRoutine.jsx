import React, {useState} from "react";
import { AddRoutine } from "../api";

const CreateRoutine = (props) =>{
	// const username = props.username
	const [name, setName] = useState('')
	const [goal, setGoal] = useState('')
	const [isPublic, setIsPublic] = useState(null)

	const user= localStorage.getItem("user")
			// console.log(user, "user")
	async function handleSubmit(event){
		event.preventDefault()
		try{
			const token= localStorage.getItem("token")
			const newRoutine = await AddRoutine(token, name, goal, isPublic)
			console.log(newRoutine, "this is new routine")
			

			


		} catch(error){
			console.error(error)
		}

	}
	return(
		<div>
			<form onSubmit={handleSubmit}>
				<p>Create a new routine here</p>
				<label htmlFor="name">Name: </label>
				<input type="text" placeholder="name"
				value={name}
				onChange={(event)=> {
					setName(event.target.value)
				}}
				required/>
				<br/>
				<label htmlFor="goal">Goal: </label>
				<input type="text" placeholder="goal"
				value={goal}
				onChange={(event)=>{
					setGoal(event.target.value)
				}}
				required/>
				<br/>
				<label htmlFor="isPublic">Make this routine public? </label>
				<select type="select" id="isPublic" onChange={(event)=>{
					setIsPublic(event.target.value)
					
				}} >
					<option value="">--Please select an option--</option>
					<option id="no" value={false}>No</option>
					<option id="yes" value ={true}>Yes</option>
				
				 
				</select>
				
				
				<br></br>
				
				<br></br>
				<input type="submit"
				value="Create New Routine"/>
				

			</form>
			
		</div>

		
	)
}





export default CreateRoutine

{/* // checked ={isPublic}
				// onChange={(event)=>{
				// 	setIsPublic(event.target.checked)
				// 	console.log(isPublic, "this is public")
				// 	console.log(setIsPublic, "set is public")
					
				// }} 
				/> */}