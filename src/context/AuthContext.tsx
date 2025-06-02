import { createContext, useEffect, useState } from "react";
import api from "../api/axios";



interface AuthContextType {
  user: any; 
  setUser: React.Dispatch<React.SetStateAction<any>>; 
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }:{children: React.ReactNode}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    try {
      const res = await api.get('/auth/profile');
      setUser(res.data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};


