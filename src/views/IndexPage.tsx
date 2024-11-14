import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"


export default function IndexPage() {

  const filterResult = useAppStore(state => state.filter)
  
  const hasFilters = useMemo(() => filterResult.drinks.length,[filterResult])

  return (
    <>
      {hasFilters ? (
        <>
          <h1 className="font-bold text-5xl text-center mb-4">Recetas</h1>

          <div
            className="max-w-5xl mx-auto grid grid-cols-3 gap-4"
          >
            {filterResult.drinks.map( drink => (
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
              />
            ))}
          </div>
        </>
      ) : 
      (
        <>
          <h1
            className="text-center font-black text-3xl"
          >Aún no haz buscado recetas </h1>
        </>
      )}    
    </>
  )
}