import React, {useState} from "react"

import { MakeActivity } from "../api"

const CreateActivity = (props)=>{
     const activities = props.activities
     const setActivities = props.setActivities

     const [name, setName] = useState('')
     const [description, setDescription]=useState('')

     async function handleSubmit(event){
		event.preventDefault()
		try{
			const token= localStorage.getItem("token")
			const newActivity = await MakeActivity(token,name, description)
			console.log(newActivity, "this is new activity")
			
			setActivities([
				...activities,
				newActivity
			])

			


		} catch(error){
			console.error(error)
		}
    }

    return(
        <div>
        <div><h3>Create an Activity here</h3>
        <form onSubmit={handleSubmit}>
    <label htmlFor="name">Activity Name: </label>
    <input type="text" 
                value={name}
				onChange={(event)=> {
					setName(event.target.value)
				}}/>
<label htmlFor="description">Description: </label>
<input type="text"
                            value={description}
                            onChange={(event)=> {
            setDescription(event.target.value)}}
/>
<input type="submit" value="Create New Activity"/>
        </form>
        </div>
        </div>
    )
}


export default CreateActivity