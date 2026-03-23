'use client';

import { useState, useCallback, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Customer' | 'Admin';
  joinDate: string;
  orders: number;
  totalSpent: string;
}

const LOCAL_STORAGE_KEY = 'gir_ayurveda_users';

const mockUsers: User[] = [
  { id: 'USR-001', name: 'Priya Sharma', email: 'priya@example.com', role: 'Customer', joinDate: '2023-10-01', orders: 2, totalSpent: '₹ 1,500' },
  { id: 'USR-002', name: 'Rahul Desai', email: 'rahul@example.com', role: 'Customer', joinDate: '2023-10-15', orders: 1, totalSpent: '₹ 1,200' },
  { id: 'USR-003', name: 'Admin Jignesh', email: 'admin@girayurveda.com', role: 'Admin', joinDate: '2023-09-20', orders: 0, totalSpent: '₹ 0' },
];

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setUsers(JSON.parse(saved));
    } else {
      setUsers(mockUsers);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockUsers));
    }
    setLoading(false);
  }, []);

  const saveUsers = (newUsers: User[]) => {
    setUsers(newUsers);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newUsers));
  };

  const deleteUser = useCallback(async (id: string) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 400));
      const updated = users.filter(u => u.id !== id);
      saveUsers(updated);
    } finally {
      setLoading(false);
    }
  }, [users]);

  return {
    users,
    loading,
    deleteUser
  };
}
