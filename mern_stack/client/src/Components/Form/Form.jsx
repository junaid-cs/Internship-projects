import React, { useState } from 'react'
import { useWorkoutContext } from '../../Hooks/useWorkoutContext'
const Form = () => {
    const {dispatch} = useWorkoutContext();
    const [title, setTitle] = useState('')
    const [load, setload] = useState('')
    const [reps, setreps] = useState('')
    const [error, setError] = useState(null);
    // console.log(title);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, load, reps };
        // if(!title == null && !load == null && !reps ==null){
        const postdata = await fetch('http://localhost:4000/api/workouts',
            {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(workout)
            });
            const data = await postdata.json();
            // console.log(data);
            if (!postdata.ok) {
                setError(data.err);
            }
            if(postdata.ok){
                setTitle('')
                setload('')
                setreps('')
                dispatch({type:'CREATE_WORKOUT',payload: data})
                // console.log(postdata);
            }
        // }
        // else{
        //     setError('All field are requeired')
        // }


    }

    return (
        <div className='p-3 mt-3 rounded-2 fw-bold' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', backgroundColor: '#E0E0E0' }}>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" onChange={(e) => { setTitle(e.target.value) }} value={title} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Load(kg)</label>
                    <input type="number" className="form-control" onChange={(e) => { setload(e.target.value) }} value={load} id="exampleInputPassword2" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Reps</label>
                    <input type="number" className="form-control" onChange={(e) => { setreps(e.target.value) }} value={reps} id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary w-50">Submit</button>
                <div className="inval-feedback text-danger">
                {error && error }
                </div>
            </form>
        </div>
    )
}

export default Form