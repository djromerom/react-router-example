import { createContext, useContext, useEffect, useState } from 'react';
import { ReactNode } from 'react';


const AUTH_KEY = 'auth';
const getStoredAuth = () => localStorage.getItem(AUTH_KEY) === 'true';
const setStoredAuth = (value: boolean) => {
    if (value) {
        localStorage.setItem(AUTH_KEY, 'true');
    } else {
        localStorage.removeItem(AUTH_KEY);
    }
};

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(getStoredAuth);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    // Simular una carga inicial (útil si en el futuro se usa una API)
        const timer = setTimeout(() => {
            setIsAuthenticated(getStoredAuth());
            setIsLoading(false);
        }, 100); // Simulación de carga
        return () => clearTimeout(timer);
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        setStoredAuth(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setStoredAuth(false);
    };

    if (isLoading) {
        return <div>Loading...</div>; // Indicador de carga inicial
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
}