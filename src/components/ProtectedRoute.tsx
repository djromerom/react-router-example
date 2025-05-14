import { ReactNode } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthProvider';

interface ProtectedRouteProps {
    children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isAuthenticated } = useAuth();

    console.log('ProtectedRoute', isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;