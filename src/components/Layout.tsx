import { Outlet } from 'react-router'
import NavLink from './NavLink'
import Logout from './Logout'

export default function Layout() {
    
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
            <header className="bg-sky-900 dark:bg-gray-800 text-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <NavLink to="/" className="text-2xl font-bold text-white hover:text-sky-200 !bg-transparent !hover:bg-transparent"> 
                MiApp
                            </NavLink>
                        </div>
                        <nav className="hidden md:block"> 
                            <ul className="ml-10 flex items-baseline space-x-4">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/product/algun-producto">Producto</NavLink></li> {/* Ejemplo de enlace a producto */}
                                <li><Logout /></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                <Outlet /> 
            </main>
            <footer className="bg-gray-200 dark:bg-gray-700 text-center p-4 text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </footer>
        </div>
    );
}