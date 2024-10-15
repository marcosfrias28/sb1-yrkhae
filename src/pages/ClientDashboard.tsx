import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getClientOrders, updateClientProfile } from '../services/api';

const ClientDashboard: React.FC = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [profile, setProfile] = useState({ name: '', email: '', address: '' });

  useEffect(() => {
    if (user) {
      getClientOrders(user.id).then(setOrders);
      setProfile({ name: user.name, email: user.email, address: user.address });
    }
  }, [user]);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateClientProfile(user.id, profile).then(() => {
      alert('Profilo aggiornato con successo!');
    });
  };

  if (!user) return <div>Accesso negato. Effettua il login per visualizzare questa pagina.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard Cliente</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">I tuoi ordini</h2>
          {orders.length === 0 ? (
            <p>Non hai ancora effettuato ordini.</p>
          ) : (
            <ul className="space-y-4">
              {orders.map((order: any) => (
                <li key={order.id} className="bg-white p-4 rounded-lg shadow">
                  <p><strong>Ordine #{order.id}</strong></p>
                  <p>Data: {new Date(order.date).toLocaleDateString()}</p>
                  <p>Stato: {order.status}</p>
                  <p>Totale: €{order.total.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Il tuo profilo</h2>
          <form onSubmit={handleProfileUpdate} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Nome</label>
              <input
                type="text"
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="address" className="block mb-1">Indirizzo</label>
              <textarea
                id="address"
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                className="w-full p-2 border rounded"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">Aggiorna Profilo</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;