import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthProvider';

export const  Login = ()=> {
    const navigate = useNavigate();
    const { login } = useAuth();

    function handleLogin() {
        login();
        navigate('/');
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
            {/* Tarjeta del formulario */}
            <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8">
                {/* Encabezado */}
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          Iniciar Sesión
                </h2>

                {/* Formulario */}
                <form onSubmit={handleLogin} className="space-y-6">
                    {/* Campo de Usuario */}
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
              Nombre de Usuario
                        </label>
                        <input
                            type="text"
                            id="username"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-gray-200"
                            placeholder="tu.usuario"
                        />
                    </div>

                    {/* Campo de Contraseña */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
              Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-gray-200"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Botón de Entrar */}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition-colors duration-150"
                        >
              Entrar
                        </button>
                    </div>

                </form>
            </div>
            {/* Pie de página opcional o marca */}
            <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
            </p>
        </div>
    );
}
export default Login;