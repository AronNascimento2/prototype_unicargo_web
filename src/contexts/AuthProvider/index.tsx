import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { authenticate } from "../../services/Authentication";

export interface AuthContextData {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar se o usuário está autenticado ao carregar o contexto
    const storedToken = localStorage.getItem("token");
    setIsAuthenticated(!!storedToken); // Define isAuthenticated como verdadeiro se houver um token armazenado
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    try {
      const response = await authenticate(username, password);
      if (response.success) {
        localStorage.setItem("token", "mockedToken"); // Salva um token fictício no armazenamento local
        setIsAuthenticated(true);
      } else {
        throw new Error(response.message ?? "Erro ao autenticar");
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token"); // Remove o token do armazenamento local ao fazer logout
    setIsAuthenticated(false);
  }, []);

  const authContextValue = useMemo(() => {
    return { isAuthenticated, login, logout };
  }, [isAuthenticated, login, logout]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
