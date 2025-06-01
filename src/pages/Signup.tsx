import { useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ username: '', password: '', shops: [''] });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleShopChange = (i: number, val: string) => {
    const newShops = [...form.shops];
    newShops[i] = val;
    setForm({ ...form, shops: newShops });
  };

  const addShop = () => {
    if (form.shops.length < 4) setForm({ ...form, shops: [...form.shops, ''] });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('');
    try {
      const payload = { ...form, shops: form.shops.filter(Boolean) };
      const res = await api.post('/auth/signup', payload);
      alert(res.data.message);
      navigate('/signin');
    } catch (err) {
      if (err && typeof err === 'object' && 'response' in err && err.response && typeof err.response === 'object' && 'data' in err.response && err.response.data && typeof err.response.data === 'object' && 'message' in err.response.data) {
        setError((err.response as any).data.message || 'Signup failed');
      } else {
        setError('Signup failed');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required className="input" 
          onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <input type="password" placeholder="Password" required className="input"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <div>
          {form.shops.map((shop, i) => (
            <input key={i} type="text" required placeholder={`Shop ${i + 1}`} value={shop}
              onChange={(e) => handleShopChange(i, e.target.value)} className="input mt-1" />
          ))}
          {form.shops.length < 4 && <button type="button" onClick={addShop} className="btn">Add Shop</button>}
        </div>
        <button type="submit" className="btn mt-4">Signup</button>
      </form>
    </div>
  );
}
