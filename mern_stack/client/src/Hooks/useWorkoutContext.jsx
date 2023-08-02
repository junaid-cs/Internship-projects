import { WorkoutContext } from "../Context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
    // console.log(WorkoutContext);
    const context = useContext(WorkoutContext)
    if (!context) {
        // throw new Error('context Error')
        console.log("error")
    }
    return context
}
