
type CalorieDisplayProps = {
    calories: number,
    text: string,    
}
export default function CalorieDisplay({calories, text} : CalorieDisplayProps){

    function colorOfText(text : string) {
        if( text === "Consumidas") {
            return "text-lime-500"
            
        } else if( text === "Ejercicio") {
            return "text-orange-500"
            
        } else if( text === "Diferencia") {
            
            if( calories <= 0 ){
                return "text-red-500"

            } else {
                return "text-blue-500"
                
            }                    
        }

        return ""
    }

    return (
        <>
            <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                <span className={`font-black text-6xl ${colorOfText(text)}`}>{calories.toLocaleString('en-US')}</span>
                {text}

            </p> 
        </>
    )
}

