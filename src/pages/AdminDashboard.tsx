import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getAllOrders, getAllUsers, updateOrder, updateUser } from '../services/api';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (user && user.role === 'admin') {
      getAllOrders().then(setOrders);
      getAllUsers().then(setUsers);
    }
  }, [user]);

  const handleOrderUpdate = (orderId: string, status: string) => {
    updateOrder(orderId, { status }).then(() => {
      setOrders(orders.map((order: any) => 
        order.id === orderId ? { ...order, status } : order
      ));
      setSelectedOrder(null);
    });
  };

  const handleUserUpdate = (userId: string, role: string) => {
    updateUser(userId, { role }).then(() => {
      setUsers(users.map((user: any) => 
        user.id === userId ? { ...user, role } : user
      ));
      setSelectedUser(null);
    });
  };

  if (!user || user.role !== 'admin') return <div>Accesso negato. Solo gli amministratori possono visualizzare questa pagina.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard Amministratore</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Gestione Ordini</h2>
          <ul className="space-y-4">
            {orders.map((order: any) => (
              <li key={order.id} className="bg-white p-4 rounded-lg shadow">
                <p><strong>Ordine #{order.id}</strong></p>
                <p>Cliente: {order.userName}</p>
                <p>Data: {new Date(order.date).toLocaleDateString()}</p>
                <p>Stato: {order.status}</p>
                <p>Totale: €{order.total.toFixed(2)}</p>
                <button 
                  onClick={() => setSelectedOrder(order)} 
                  className="btn-secondary mt-2"
                >
                  Modifica
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Gestione Utenti</h2>
          <ul className="space-y-4">
            {users.map((user: any) => (
              <li key={user.id} className="bg-white p-4 rounded-lg shadow">
                <p><strong>{user.name}</strong></p>
                <p>Email: {user.email}</p>
                <p>Ruolo: {user.role}</p>
                <button 
                  onClick={() => setSelectedUser(user)} 
                  className="btn-secondary mt-2"
                >
                  Modifica
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Modifica Ordine #{selectedOrder.id}</h3>
            <p>Stato attuale: {selectedOrder.status}</p>
            <div className="mt-4">
              <button onClick={() => handleOrderUpdate(selectedOrder.id, 'In lavorazione')} className="btn-secondary mr-2">In lavorazione</button>
              <button onClick={() => handleOrderUpdate(selectedOrder.id, 'Spedito')} className="btn-secondary mr-2">Spedito</button>
              <button onClick={() => handleOrderUpdate(selectedOrder.id, 'Consegnato')} className="btn-secondary">Consegnato</button>
            </div>
            <button onClick={() => setSelectedOrder(null)} className="btn-primary mt-4">Chiudi</button>
          </div>
        </div>
      )}

      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Modifica Utente {selectedUser.name}</h3>
            <p>Ruolo attuale: {selectedUser.role}</p>
            <div className="mt-4">
              <button onClick={() => handleUserUpdate(selectedUser.id, 'user')} className="btn-secondary mr-2">Utente</button>
              <button onClick={() => handleUserUpdate(selectedUser.id, 'admin')} className="btn-secondary">Amministratore</button>
            </div>
            <button onClick={() => setSelectedUser(null)} className="btn-primary mt-4">Chiudi</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;