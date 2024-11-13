import { Drink } from "../types"

type DrinkProps = {
  drink : Drink
}

export default function DrinkCard({drink} : DrinkProps ) {
  return (
    <>
    <div
      className="p-4 bg-slate-200 rounded-2xl"
    >
      <div
        className="overflow-hidden"
      >
        <img 
          className="rounded-lg hover:scale-125 transition-transform hover:rotate-2"
          src={drink.strDrinkThumb} 
          alt={`Imagen ${drink.strDrink}`}
        />
      </div>
      <h1 className="font-bold">{drink.strDrink}</h1>
    </div>
    </>
  )
}
