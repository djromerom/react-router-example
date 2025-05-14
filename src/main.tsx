
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './context/AuthProvider.tsx'
import { RouterProvider } from 'react-router'
import router from './routes/router.tsx'

createRoot(document.getElementById('root')!).render(
  
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>,
)
 