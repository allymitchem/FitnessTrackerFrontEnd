import React, { useEffect, useState } from "react";
import { getMyRoutine } from "../api";

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
      {myRoutines.map((myRoutine) => {
        return <div>{myRoutine.name}</div>;
      })}
    </div>
  );
};

export default MyRoutines;
