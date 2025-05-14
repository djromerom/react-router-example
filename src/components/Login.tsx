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
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Iniciar sesión d</button>
        </div>
    );
}
export default Login;