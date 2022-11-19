import React from "react"

const CreateActivity = ()=>{

    return(
        <div><h3>Create an Activity here</h3>
        <form>
<label>Activity Name: <input type="text"></input></label>
<label>Description: <input type="text"></input></label>
        </form>
        <button type="submit">Submit</button>
        </div>
    )
}


export default CreateActivity