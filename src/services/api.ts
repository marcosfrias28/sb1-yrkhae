// This is a mock API service. In a real application, you would replace these
// functions with actual API calls to your backend server.

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const mockUsers = [
  { id: '1', name: 'Cliente Uno', email: 'cliente1@example.com', role: 'user', address: 'Via Roma 1, Milano' },
  { id: '2', name: 'Admin Uno', email: 'admin1@example.com', role: 'admin', address: 'Via Venezia 2, Roma' },
];

const mockOrders = [
  { id: '1', userId: '1', userName: 'Cliente Uno', date: '2023-08-01', status: 'Consegnato', total: 129.99 },
  { id: '2', userId: '1', userName: 'Cliente Uno', date: '2023-08-15', status: 'In lavorazione', total: 259.98 },
];

export const login = async (email: string, password: string) => {
  await delay(500); // Simulate API delay
  const user = mockUsers.find(u => u.email === email);
  if (user && password === 'password') { // In a real app, you'd properly hash and compare passwords
    return user;
  }
  throw new Error('Invalid credentials');
};

export const logout = async () => {
  await delay(500); // Simulate API delay
  // In a real app, you'd invalidate the session on the server
};

export const getCurrentUser = async () => {
  await delay(500); // Simulate API delay
  // In a real app, you'd validate the user's session and return the current user
  return mockUsers[0]; // For demo purposes, always return the first user
};

export const getClientOrders = async (userId: string) => {
  await delay(500); // Simulate API delay
  return mockOrders.filter(order => order.userId === userId);
};

export const updateClientProfile = async (userId: string, profile: any) => {
  await delay(500); // Simulate API delay
  const userIndex = mockUsers.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    mockUsers[userIndex] = { ...mockUsers[userIndex], ...profile };
    return mockUsers[userIndex];
  }
  throw new Error('User not found');
};

export const getAllOrders = async () => {
  await delay(500); // Simulate API delay
  return mockOrders;
};

export const getAllUsers = async () => {
  await delay(500); // Simulate API delay
  return mockUsers;
};

export const updateOrder = async (orderId: string, update: any) => {
  await delay(500); // Simulate API delay
  const orderIndex = mockOrders.findIndex(o => o.id === orderId);
  if (orderIndex !== -1) {
    mockOrders[orderIndex] = { ...mockOrders[orderIndex], ...update };
    return mockOrders[orderIndex];
  }
  throw new Error('Order not found');
};

export const updateUser = async (userId: string, update: any) => {
  await delay(500); // Simulate API delay
  const userIndex = mockUsers.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    mockUsers[userIndex] = { ...mockUsers[userIndex], ...update };
    return mockUsers[userIndex];
  }
  throw new Error('User not found');
};