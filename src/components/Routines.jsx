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
      <div></div>
      <div>
        {routines.map((routine) => {
          return (
            <div className="routineActs" key={`routines-id${routine.id}`}>
              <div id="routines">
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
                return (
                  <div id="activities2" key={`activity-id${activity.id}`}>
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
