import React, { useState, useEffect } from "react";
import { getRoutines } from "../api";
const Routines = () => {
  const [routines, setRoutines] = useState([]);
  useEffect(() => {
    async function fetchRoutines() {
      const allRoutines = await getRoutines();
      setRoutines(allRoutines);
    }
    fetchRoutines();
  }, []);

  return (
    <div>
      <div>
        <h2>This is Routines</h2>
      </div>
      <div>
        {routines.map((routine) => {
          return (
            <div id="routines" key={`routines-id${routine.id}`}>
              <div>Creator Name:{routine.creatorName}</div>
              <div>Name:{routine.name}</div>
              <div>Goal:{routine.goal}</div>
			  <div>Duration:{routine.duration}</div>
			  <div>Count:{routine.activities.id}</div>
			  <div>Description:{routine.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Routines;

// {"id":580,"creatorId":282,"isPublic":true,"name":"play roulette","goal":"throw your life savings on one single spin of roulette","creatorName":"derekMiller","activities":[{"id":1,"name":"Not wide grip","description":"Dont do it","duration":1,"count":1,"routineActivityId":9494,"routineId":580}