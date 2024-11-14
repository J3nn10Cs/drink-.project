import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"
import { useEffect } from "react"
import { useAppStore } from "../stores/useAppStore"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function Layout() {

  const localStorageGet = useAppStore(state => state.loadFromStorage)

  useEffect(() => {
    localStorageGet()
  },[])

  return (
    <>
      <Header/>

      <main className="container mx-auto py-7">
        <Outlet/>
      </main>

      <Modal/>
      {/* por si las dudad */}
      <ToastContainer/>
    </>
  )
}
