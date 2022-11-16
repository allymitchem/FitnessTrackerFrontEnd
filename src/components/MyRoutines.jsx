import React, { useEffect, useState } from "react";
import { getMyRoutine } from "../api";
import CreateRoutine from "./CreateRoutine";

const MyRoutines = (props) => {
  const username = props.username;
  const [myRoutines, setMyRoutines] = useState([]);
  useEffect(() => {
    async function fetchMyRoutines() {
		const token = localStorage.getItem('token')
      if (username && token) {
        const allMyRoutines = await getMyRoutine(username, token);
        setMyRoutines(allMyRoutines);
      }
    }
    fetchMyRoutines();
  }, [username]);
  return (
    <div>
		<CreateRoutine username={username}/>
		<div>
            <h4>myroutineshere</h4>
      {myRoutines.map((myRoutine) => {
        return <div>{myRoutine.name}</div>;
      })}
	  	</div>
    </div>
  );
};

export default MyRoutines;
