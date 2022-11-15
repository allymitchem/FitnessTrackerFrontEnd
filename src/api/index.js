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