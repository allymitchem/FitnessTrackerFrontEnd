import React, {useState, useEffect} from "react"
import { getActivities, getActivityRoutines} from "../api";
import CreateActivity from "./CreateActivity";

const Activities = ({activities, setActivities}) => {
    // const [activities, setActivities] = useState([]);
    
	
    return (
        <div>
          <div>
            <h3 className="activitiesTitle">All Activities</h3>
          </div>
          <CreateActivity activities={activities} setActivities={setActivities}/>
          <div>
            {
            activities && activities.length ?  activities.map((activity) => {
                
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
            }): null
           
            }
          </div>
        </div>
      );
        }

export default Activities