import React, { useEffect, useState } from "react";
import { getMyRoutine } from "../api";
import CreateRoutine from "./CreateRoutine";
import Routines from "./Routines";

const MyRoutines = (props) => {
//   const username = props.username;
  const user= localStorage.getItem("user")
  console.log(user, " this is user")
  
  const [myRoutines, setMyRoutines] = useState([]);
  useEffect(() => {
    async function fetchMyRoutines() {
		const token = localStorage.getItem('token')
      if (user && token) {
       
        const allMyRoutines = await getMyRoutine(user, token);
        console.log(allMyRoutines, "this is all my routines")
        setMyRoutines(allMyRoutines);
    } 
        
      }
    fetchMyRoutines();
  }, [user]);

  
  return (
    <div>
		<CreateRoutine user={user}/>
        <h4>my routines under here</h4>
        <div>
            
            {myRoutines.map((routine)=>{
               console.log(myRoutines)
                    return(
                    <div>
                        <div><b>
                        Routine Name:</b> {routine.name}
                        </div>
                        <div><b>Goal:</b> {routine.goal} </div>
                    </div>
                    )
                
            })}
        </div>
		</div>
			)}
            {/* <h4>myroutineshere</h4>
    //   {routines.map((routine) => { */}
    {/* //     return( 
	// 		// if (routine.creatorName === username){ */}
	/* // 		// 	return(

	// 		// 	)
	// 		// }

	// 	<div>{routine.username}</div>
    // //   )})}
	//   	</div>
    // </div>
//   );
// }; */

export default MyRoutines;
