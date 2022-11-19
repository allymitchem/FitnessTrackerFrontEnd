import React, { useEffect, useState } from "react";
import { getMyRoutine, updateRoutine } from "../api";
import MySingleRoutine from "./MySingleRoutine";
import CreateRoutine from "./CreateRoutine";
import Routines from "./Routines";

const MyRoutines = (props) => {
  //   const username = props.username;
  const user = localStorage.getItem("user");
  const [myRoutines, setMyRoutines] = useState([]);
  const activities = props.activities
  const setActivities = props.setActivities

  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchMyRoutines() {
      if (user && token) {
        const allMyRoutines = await getMyRoutine(user, token);
        setMyRoutines(allMyRoutines);
      }
    }
    fetchMyRoutines();
  }, [user]);

  return (
    <>
      <div>
        <CreateRoutine user={user}  myRoutines={myRoutines} setMyRoutines={setMyRoutines} />
       
      </div>

      <h4>My Routines</h4>
      {myRoutines.length ? (
        myRoutines.map((routine) => {
          return (
            <MySingleRoutine
              key={`myRoutine-id${routine.id}`}
              routine={routine}
              myRoutines={myRoutines}
              setMyRoutines={setMyRoutines}
              activities={activities}
              setActivities={setActivities}
            />
          );
        })
      ) : (
        <h2>Loading your routines...</h2>
      )}
    </>
  );
};
export default MyRoutines;
