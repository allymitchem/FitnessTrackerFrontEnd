import React from "react";
import CreateActivity from "./CreateActivity";

const Activities = ({ activities, setActivities }) => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  return (
    <div>
      <div></div>
      {user && token ? (
        <CreateActivity activities={activities} setActivities={setActivities} />
      ) : null}

      <h3 className="activitiesTitle">All Activities</h3>
      <div>
        {activities && activities.length
          ? activities.map((activity) => {
              return (
                <div
                  className="activitiesTab"
                  id="activities"
                  key={`all-activities-id${activity.id}`}
                >
                  <div id="activityList">
                    <div>
                      <b>Activity Name:</b> {activity.name}
                    </div>
                    <div>
                      <b>Description:</b> {activity.description}
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Activities;
