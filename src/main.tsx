import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router'

createRoot(document.getElementById('root')!).render(
    <AppRouter />
)