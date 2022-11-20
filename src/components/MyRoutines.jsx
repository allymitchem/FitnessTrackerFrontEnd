import React, { useEffect, useState } from "react";
import { getMyRoutine } from "../api";
import MySingleRoutine from "./MySingleRoutine";
import CreateRoutine from "./CreateRoutine";

const MyRoutines = (props) => {
  const user = localStorage.getItem("user");
  const [myRoutines, setMyRoutines] = useState([]);
  const activities = props.activities;
  const setActivities = props.setActivities;

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
        <CreateRoutine
          user={user}
          myRoutines={myRoutines}
          setMyRoutines={setMyRoutines}
        />
      </div>

      <h2>My Routines</h2>
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
