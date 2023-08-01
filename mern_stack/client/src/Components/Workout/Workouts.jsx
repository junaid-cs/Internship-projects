import React, { useEffect } from 'react'
import { useWorkoutContext } from '../../Hooks/useWorkoutContext'


const Workouts = ({ workout }) => {
    const { dispatch } = useWorkoutContext();

    const handleDelete = async () => {
         // if(!title == null && !load == null && !reps ==null){
            const deletedata = await fetch('http://localhost:4000/api/workouts/'+ workout._id,
            {
                method: 'DELETE'
            });
            const data = await deletedata.json();
            // console.log(data);
            if(deletedata.ok){
                dispatch({type:'DELETE_WORKOUT',payload: data})
                console.log('data deleted');
            }

    }
    return (

        <div className='col-12 my-3 rounded-2 d-flex justify-content-between' key={workout._id} style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', backgroundColor: '#E0E0E0' }}>
            <div className="left-container">

                <div className='text-success py-3 px-2 fw-bolder '>{workout.title}</div>
                <div className="text- px-3" ><span className="fw-bold">Load(kg) : </span>{workout.load}</div>
                <div className="text- px-3 py-1"> <span className="fw-bold">Reps : </span>{workout.reps}</div>
                <div className="text- px-3 pt-1 pb-2">{workout.createdAt}</div>
            </div>
            <span className='text-danger px-3 py-2 fw-bolder  d-inline-block' onClick={handleDelete} style={{ cursor: 'pointer' }}>x</span>

        </div>

    )
}

export default Workouts