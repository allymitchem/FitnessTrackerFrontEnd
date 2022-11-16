import React, {useState, useEffect} from "react"
import { getActivities, getActivityRoutines } from "../api";

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
      async function fetchActivities() {
        const allActivities = await getActivities();
        setActivities(allActivities);
      }
      fetchActivities();
    }, []);
	
    return (
        <div>
          <div>
            <h3 className="activitiesTitle">All Activities</h3>
          </div>
          <div>
            {activities.map((activity) => {
                
              return (
                <div className="activitiesTab" key={`activities-id${activity.id}`}>
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
            })}
          </div>
        </div>
      );
        }

export default Activities