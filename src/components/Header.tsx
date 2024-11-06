import { useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore";

export default function Header() {

  // para saber en donde esta el usuario
  const {pathname} = useLocation();

  const isHome = useMemo(() => pathname === '/' ,[pathname])

  const fetchCategories = useAppStore((state) => state.fetchCategories)

  useEffect(() => {
    fetchCategories()
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
                />
              </div>
              <div 
                className="m-3"
              >
                <label 
                  htmlFor="ingredient"
                  className="block text-black mt-2 font-bold text-xl"
                >
                  Category
                </label>

                <select
                  name="category" 
                  id="category"
                  className="w-full bg-white p-3 mt-3 rounded-xl text-gray-700"
                >
                  <option value="">--Selecciona--</option>
                  
                </select>
              </div>
            </form>
          )}
    </>
  )
}
