import { useReducer } from "react"
import  Form  from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"

function App() {    

  const [state, dispatch] = useReducer( activityReducer, initialState)  

  return (
    <>
        <header className="bg-lime-600 py-3">
            <div className="max-w-4xl mx-auto flex justify-between items-center ">
                <h1 className="text-center text-lg font-bold text-white uppercase">
                    Contador de Calorías
                </h1>

                <button 
                    className="bg-black rounded-sm p-2  text-white font-bold shadow-black hover:cursor-pointer hover:shadow"
                >
                    Reiniciar
                </button>
            </div>

        </header>

        <section className="bg-lime-500 py-20 px-5">
            <div className="max-w-4xl mx-auto">
                <Form
                    dispatch={dispatch}
                />
            </div>
        </section>

        <section className="bg-slate-100 p-10 mx-auto max-w-4xl">

            < ActivityList 
                activities={state.activities}
            />

        </section>

    </>
  )
}

export default App
