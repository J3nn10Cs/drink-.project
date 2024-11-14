import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { JSX } from 'react';
import { RecipeDetails } from '../types';

export default function Modal() {

  const modal =  useAppStore(state => state.modal)

  const closemodal =  useAppStore(state => state.closeModal)

  const detailsRecipe =  useAppStore(state => state.details)

  const handleClick =  useAppStore(state => state.handleClickFavorite)

  const favoriteEcist =  useAppStore(state => state.favoriteExist)

  //keyOf cualquiera de esas llaves que pertenecen a ese type
  const getIngredient = () => {
    const ingredients : JSX.Element[] = []

    for (let i = 1; i <6; i++) {
      const ingredient = detailsRecipe[`strIngredient${i}` as keyof RecipeDetails]
      const measure = detailsRecipe[`strMeasure${i}` as keyof RecipeDetails]

      if(ingredient && measure){
        ingredients.push(
          <li
            key={i}
          >
            {ingredient} - {measure}
          </li>
        )
      }
      
    }
    return ingredients
  }
  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closemodal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                      {detailsRecipe.strDrink}
                  </Dialog.Title>
                      <img 
                        src={detailsRecipe.strDrinkThumb} 
                        alt={`Imagen de ${detailsRecipe.strDrink}`}
                        className='w-80 mx-auto rounded-xl'
                      />
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Ingredientes y Cantidades
                  </Dialog.Title>
                    {getIngredient()}
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Instrucciones
                    <p className='text-xl font-normal'>{detailsRecipe.strInstructions}</p>
                  </Dialog.Title>

                  <div
                    className='flex gap-3'
                  >
                    <button
                      className='bg-slate-600 rounded-xl p-2 w-full text-white font-bold'
                      onClick={closemodal}
                    >
                      Cerrar
                    </button>
                    <button
                      className='bg-orange-500 rounded-xl p-2 w-full text-white font-bold'
                      onClick={() =>{
                        handleClick(detailsRecipe)
                        closemodal()
                        
                      }}
                    >
                      {favoriteEcist(detailsRecipe.idDrink) ? 
                        'Eliminar de favoritos'
                        : 'Agregar a favoritos'}

                    </button>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}