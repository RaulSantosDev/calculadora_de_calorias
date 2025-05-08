import { categories } from "../data/categories"
import { useState, ChangeEvent } from "react"

export default function Form() {

  const [ activity, setActivity] = useState({
      category: 1,
      name: '',
      calories: 0,
  })

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
    e.preventDefault
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

            )
              
            )}
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




