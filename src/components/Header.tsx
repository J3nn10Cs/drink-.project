import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom"

export default function Header() {

  // para saber en donde esta el usuario
  const {pathname} = useLocation();

  const isHome = useMemo(() => pathname === '/' ,[pathname])
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

          {isHome && (
            <form action="">
              <div>
                <label 
                  htmlFor="ingredient"
                  className="block text-white mt-2 font-bold text-2xl"
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
            </form>
          )}

        </div>
      </header> 
    </>
  )
}
