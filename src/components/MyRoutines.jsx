import React, { useEffect, useState } from "react";
import { getMyRoutine } from "../api";
import CreateRoutine from "./CreateRoutine";
import Routines from "./Routines";

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
		<CreateRoutine username={username}/>
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
