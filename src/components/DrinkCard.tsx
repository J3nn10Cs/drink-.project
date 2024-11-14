import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"

type DrinkProps = {
  drink : Drink
}

export default function DrinkCard({drink} : DrinkProps ) {

  const selectRecipe = useAppStore(state => state.selectRecipe)

  return (
    <>
    <div
      className="p-4 bg-slate-200 rounded-2xl"
    >
      <div
        className="overflow-hidden"
      >
        <img 
          className="rounded-lg hover:scale-125 transition-transform hover:rotate-2 h-80 w-full"
          src={drink.strDrinkThumb} 
          alt={`Imagen ${drink.strDrink}`}
        />
      </div>
      <h1 className="font-bold p-2 text-xl">{drink.strDrink}</h1>

      <button
        className="bg-orange-400 hover:bg-orange-500 rounded-lg w-full p-2 font-bold text-white"
        onClick={() => selectRecipe(drink.idDrink)}
      >
        Ver receta
      </button>
    </div>
    </>
  )
}
