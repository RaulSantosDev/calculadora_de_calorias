import { v4 as uuidv4 } from 'uuid'
import { categories } from "../data/categories"
import { useState, ChangeEvent, Dispatch, useEffect } from "react"
import { ActivityActions, ActivityState} from "../reducers/activity-reducer"

type FormProps = {
  dispatch : Dispatch<ActivityActions>,
  state: ActivityState
}

const initialState = {
    id: uuidv4(),
    category: 1,
    name: '',
    calories: 0,
}

export default function Form({dispatch, state} : FormProps) {

  const [ activity, setActivity] = useState(initialState)

  useEffect(() => {
      if(state.activeId){
        const selectActivity = state.activities.filter( stateActivity => stateActivity.id === state.activeId)[0]
        setActivity(selectActivity)
      }

  }, [state.activeId])

  const handlechange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {  
    const isNumberFlied = ['category', "calories"].includes(e.target.id)
    setActivity({
      ...activity,
      [e.target.id]: isNumberFlied ? +e.target.value : e.target.value
    })      
  }

  const isValidActivity = () => {
    const { name, calories } = activity
    return name.trim() !== "" && calories > 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault()

    dispatch({ type: "save-activity", payload: {newActivity: activity}})

    setActivity({
      ...initialState,
      id: uuidv4()
    })
  }

  return (
    
    <form 
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}

    >
      <div className="grid grid-cols-1 gap-3">
        
          <label htmlFor="category" className="font-bold">Categoría:</label>
          <select 
            className="border border-slate-300 p-2 rounded-lg w-full "
            id="category"
            value={activity.category}
            onChange={handlechange}
          >
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>

            ))}


          </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
          <label htmlFor="name" className="font-bold">Actividad:</label>
          <input 
            id="name"
            type="text"
            className="border border-slate-300 rounded-lg p-2"
            placeholder="Ej: Comida, Jugo de naranja, Ejercicio, pesas etc"
            value={activity.name}
            onChange={handlechange}

          />
          
      </div>

      <div className="grid grid-cols-1 gap-3">
          <label htmlFor="calories" className="font-bold">Calorías</label>
          <input 
            id="calories"
            type="number"
            className="border border-slate-300 rounded-lg p-2"
            placeholder="Ej: 300, 500, 1000 etc"
            value={activity.calories}
            onChange={handlechange}

          />
          
      </div>

      <input 
        type="submit" 
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold text-white cursor-pointer uppercase disabled:opacity-10"
        value={activity.category === 1 ? "Guardar comida" : "Guardar ejercicio"}
        disabled={!isValidActivity()}

      />

      
    </form>

            
  )
}




