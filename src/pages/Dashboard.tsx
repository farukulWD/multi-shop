
import { useAuth } from '@/hooks/useAuth';
import api from '../api/axios';

export default function Dashboard() {
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    if (window.confirm('Are you sure to logout?')) {
      await api.post('/auth/logout');
      setUser(null);
    }
  };
// TODO: Fix the type of user and shops
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Welcome, {user.username}</h1>
        <button onClick={handleLogout} className="btn">Logout</button>
      </div>
      <h2 className="mt-4">Your Shops:</h2>
      <ul className="list-disc ml-6">
        {user.shops.map((shop:any) => (
          <li key={shop}>
            <a href={`http://${shop}.localhost:5173`} className="text-blue-600 underline">
              {shop}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
