import React, {useState} from "react";
import { AddRoutine } from "../api";

const CreateRoutine = (props) =>{
	// const username = props.username
	const [name, setName] = useState('')
	const [goal, setGoal] = useState('')
	const [isPublic, setIsPublic] = useState(null)
	async function handleSubmit(e){
		e.preventDefault()

	}
	return(
		<div>
			
		</div>

		
	)
}





export default CreateRoutine