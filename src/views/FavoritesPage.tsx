import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export default function FavoritesPage() {

  const favorite = useAppStore(state => state.favorites)

  const hasFavorites = useMemo(() => favorite.length ,[favorite])
  return (
    <>
    {hasFavorites ? (
      <div
      className="max-w-5xl mx-auto grid grid-cols-3 gap-4"
      >
        {favorite.map(fav => (
          <DrinkCard
            key={fav.idDrink}
            drink={fav}
          />
        ))}
      </div>
    ):
    (
      <h1
        className="text-center font-bold text-3xl"
      >Aún no hay favoritos</h1>
    )}
      
    </>
  )
}
