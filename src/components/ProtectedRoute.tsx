import { Navigate } from 'react-router-dom';

import LoadingSpinner from './LoadingSpinner';
import { useAuth } from '../hooks/useAuth';



export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const auth = useAuth();

  if (!auth || auth.loading) return <LoadingSpinner />;
  return auth.user ? children : <Navigate to="/signin" />;
}
