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
          console.log(routine, "I am routineeee");
          return (
            <div className="routineActs">
              <div id="routines" key={`routines-id${routine.id}`}>
                <div>
                  <b>Creator Name:</b> {routine.creatorName}
                </div>
                <div>
                  <b>Routine Name:</b> {routine.name}
                </div>
                <div>
                  <b>Goal:</b> {routine.goal}
                </div>
              </div>
              {routine.activities.map((activity) => {
                console.log(activity, "I am activityyy ");
                return (
                  <div id="activities">
                    <div>
                      <b>Activity Name:</b> {activity.name}
                    </div>
                    <div>
                      <b>Description:</b> {activity.description}
                    </div>
                    <div>
                      <b>Count:</b> {activity.count}
                    </div>
                    <div>
                      <b>Duration:</b> {activity.duration}{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Routines;
