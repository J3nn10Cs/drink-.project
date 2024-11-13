import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore";
import { ChangeEvent, FormEvent } from "react";
import { SearchFilter } from "../types";

export default function Header() {

  // para saber en donde esta el usuario
  const {pathname} = useLocation();

  const isHome = useMemo(() => pathname === '/' ,[pathname])

  const fetchCategorie = useAppStore((state) => state.fetchCategories)

  const categories = useAppStore((state) => state.categories)

  const searchRecipes = useAppStore((state) => state.fetchSearch)
    
  //colocar en el state lo que el usuario ingresa en el input
  const [searchFilter, setSearchFilter] = useState<SearchFilter>({
    ingredient : '',
    category : ''
  })

  const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearchFilter({
      ...searchFilter,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(Object.values(searchFilter).includes('')){
      console.log('Todos los campos son obligatorios');
      return
    }

    searchRecipes(searchFilter)

  }

  useEffect(() => {
     fetchCategorie()
  },[])
  return (
    <>
      <header className="bg-sky-900">
        <div className="container mx-2 md:mx-auto px-5 py-6">
          <div className="flex justify-between items-center">
            <div>
              <img 
                className="w-32"
                src="/logo.svg"
                alt="logo"
              />
            </div>

            <nav className="flex gap-5 font-bold ">
              {/* Nav es para que se pueda ver en donde estamos haciendo click */}
              <NavLink 
                to="/"
                className={({isActive})=>
                  isActive ? 
                    'text-orange-500 text-xl'
                  : 'text-white text-xl'
                }
              >Inicio
              </NavLink>

              <NavLink 
                to="/favorite"
                className={({isActive})=>
                  isActive ? 
                    'text-orange-500 text-xl'
                  :'text-white text-xl'
                }
              >
                Favorites
              </NavLink>
            </nav>
          </div>
        </div>
      </header> 

      {isHome && (
            <form 
              action=""
              className="max-w-3xl mx-auto bg-orange-400 p-3 space-y-3 mt-4 rounded-2xl"
              onSubmit={handleSubmit}
            >
              <div 
                className="m-3"
              >
                <label 
                  htmlFor="ingredient"
                  className="block text-black mt-2 font-bold text-xl"
                >
                  Name Ingredient
                </label>

                <input 
                  type="search"
                  name="ingredient" 
                  id="ingredient"
                  className="w-full bg-white p-3 mt-3 rounded-xl text-gray-700"
                  placeholder="Name o ingredient. Ej, Vodka, Tekila, Cafe"
                  onChange={handleChange}
                  value={searchFilter.ingredient}
                />
              </div>
              <div 
                className="m-3"
              >
                <label 
                  htmlFor="category"
                  className="block text-black mt-2 font-bold text-xl"
                >
                  Category
                </label>

                <select
                  name="category" 
                  id="category"
                  className="w-full bg-white p-3 mt-3 rounded-xl text-gray-700"
                  onChange={handleChange}
                  value={searchFilter.category}
                >
                  <option value="">--Selecciona--</option>
                  {categories.drinks.map(cate => (
                    <option 
                      value={cate.strCategory}
                      key={cate.strCategory}
                    >
                      {cate.strCategory}
                    </option>
                  ))}
                </select>
              </div>

              <button
                className="p-2 bg-orange-200 w-full rounded-3xl font-bold"
              >
                Buscar recetas
              </button>
            </form>
          )}
    </>
  )
}
