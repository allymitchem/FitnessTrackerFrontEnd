import { json } from "react-router-dom"

const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api'

export async function getRoutines(){
	const response = await fetch(`${BASE_URL}/routines`,{
		headers: {
			'Content-Type': 'application/json',
		}
	})
	const result = await response.json()
	
	
	return result
}

export async function getActivities(){
	const response = await fetch(`${BASE_URL}/activities`, {
		headers:{
			'Content-Type': 'application/json'
		}

	})
	
	const result = await response.json()
	
	return result
}

export async function getActivityRoutines(){
	const response = await fetch(`${BASE_URL}/activities/${activityId}/routines`, {
		headers:{
			'Content-Type': 'application/json'
		}

	}) 
	const result = await response.json()
	console.log(result, 'this is result')
	getActivityRoutines()
	return result
} 


export async function registerUser(username, password){
	const options = {
		method:"POST",
		headers: {
			'Content-Type': 'application/json',
		}, 
		body: JSON.stringify({username, password}),
	}
	const response = await fetch(`${BASE_URL}/users/register`, options)
	const result = await response.json()
	return result
}

export async function loginUser(username, password){
	const options = {
		method:"POST",
		headers: {
			'Content-Type': 'application/json',
		}, 
		body: JSON.stringify({username, password}),
	}
	const response = await fetch(`${BASE_URL}/users/login`, options)
	const result = await response.json()
	
	return result
}

export async function getMyRoutine(username, token){
	console.log(username)
	try {
	const response = await fetch(`${BASE_URL}/users/${username}/routines`,{
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
	const result = await response.json()
	console.log(result, 'this is result')
	
	
	return result
	}catch(error){
		console.log(error)

	}
}