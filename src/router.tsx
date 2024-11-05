import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import FavoritesPage from "./views/FavoritesPage"
import Layout from "./layouts/Layout"
export default function router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* header en el loyaut  */}
          <Route element={<Layout/>}>
            {/* Url que el usuario va a visitar */}
            <Route path="/" element={<IndexPage/>} index/>
            <Route path="/favorite" element={<FavoritesPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
