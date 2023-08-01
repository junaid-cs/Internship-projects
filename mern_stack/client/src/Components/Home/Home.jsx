import React, { useEffect, useState } from 'react'
import Workouts from '../Workout/Workouts';
import Form from '../Form/Form';
import { useWorkoutContext } from '../../Hooks/useWorkoutContext';
const Home = () => {
    const {workouts , dispatch} = useWorkoutContext();
    // const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
        const Workouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts');
            // console.log(response)
            const data = await response.json();
            if (response.ok) {
               dispatch({type:'SET_WORKOUTS',payload:data})
            }
            else {
                console.log('error')
            }

        }
        Workouts();
    }, [])
    return (
        <div className="container my-3">
            <div className="row gap-4 flex-column-reverse flex-md-row">
                <div className='col-12 col-md-7 ' >
            
            {
                workouts && workouts.map((workout) =>

                (
                    <Workouts key={workout._id} workout={workout}/>

                )
                )
            }
            {/* <div>home</div> */}
            </div>
            <div className="col-12 col-md-4 col-lg-3">
                <Form />
            </div>
        </div>
        </div>
    )
}

export default Home