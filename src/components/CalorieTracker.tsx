import { Activity } from "../types"
import { useMemo } from "react"
import CalorieDisplay from "./CaloriesDisplay"

type CalorieTrackerProp = {
    activities: Activity[]

}

const CalorieTracker = ( {activities} : CalorieTrackerProp) => {

  const calorieConsumed = useMemo( () => activities.reduce((total, activity) => activity.category === 1 ?  total + activity.calories : total, 0 ), [activities])

  const caloriesBurned = useMemo( () => activities.reduce((total, activity) => activity.category === 2 ?  total + activity.calories : total, 0 ), [activities])


  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">Resumen Calorías</h2>  

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10  ">

        < CalorieDisplay 
          calories={calorieConsumed}
          text="Consumidas"
          activities={activities}
          
        />

        < CalorieDisplay 
          calories={caloriesBurned}
          text="Ejercicio"
          activities={activities}
        />

       
        
        
      </div>  
    </>
  )
}

export default CalorieTracker
