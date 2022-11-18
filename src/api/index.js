import { json } from "react-router-dom";

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

export async function getRoutines() {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getActivities() {
  const response = await fetch(`${BASE_URL}/activities`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  return result;
}

export async function getActivityRoutines() {
  try {
    const response = await fetch(
      `${BASE_URL}/activities/${activityId}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    getActivityRoutines();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function registerUser(username, password) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };
    const response = await fetch(`${BASE_URL}/users/register`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function loginUser(username, password) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };
    const response = await fetch(`${BASE_URL}/users/login`, options);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getMyRoutine(username, token) {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    });
    const result = await response.json();
   
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function AddRoutine(token, name, goal, isPublic) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
	  body: JSON.stringify({
		// routine:{
			name,
			goal,
			isPublic,
		// },
		
	  }),
	
    };
	const response = await fetch(`${BASE_URL}/routines`, options)
	const result = await response.json()
	
return result
	
  } catch (error) {
    console.error(error);
  }
}

export async function updateRoutine(token, routine, routineId){
  try{
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
    }, 
    body: JSON.stringify(
     routine
    )
  }
  const response = await fetch(`${BASE_URL}/routines/${routineId}`, options)
  const result = await response.json()
  return result
}catch(error){
  console.error(error)
}}


export async function deleteRoutine(token, routineId){
  try{
    const options = {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  }
  const response = await fetch (`${BASE_URL}/routines/${routineId}`, options)
  const result = await response.json()
  console.log(result, "delete api result")
  return result
  } catch(error){
    console.error(error)
  }
}
