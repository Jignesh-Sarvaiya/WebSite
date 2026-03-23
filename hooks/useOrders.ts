'use client';

import { useState, useCallback, useEffect } from 'react';

export interface Order {
  id: string;
  customer: string;
  email: string;
  date: string;
  total: string;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  items: string;
}

const LOCAL_STORAGE_KEY = 'gir_ayurveda_orders';

const mockOrders: Order[] = [
  { id: 'ORD-0012', customer: 'Priya Sharma', email: 'priya@example.com', date: '2023-11-24', total: '₹ 850', status: 'Pending', items: 'Multi Flora Honey, Moringa Powder' },
  { id: 'ORD-0011', customer: 'Rahul Desai', email: 'rahul@example.com', date: '2023-11-23', total: '₹ 1,200', status: 'Shipped', items: 'A2 Gir Cow Ghee' },
  { id: 'ORD-0010', customer: 'Anita Patel', email: 'anita@example.com', date: '2023-11-23', total: '₹ 450', status: 'Delivered', items: 'Panchagavya Soap x3' },
  { id: 'ORD-0009', customer: 'Suresh Kumar', email: 'suresh@example.com', date: '2023-11-22', total: '₹ 2,100', status: 'Delivered', items: 'Complete Wellness Kit' },
];

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setOrders(JSON.parse(saved));
    } else {
      setOrders(mockOrders);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockOrders));
    }
    setLoading(false);
  }, []);

  const saveOrders = (newOrders: Order[]) => {
    setOrders(newOrders);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newOrders));
  };

  const updateOrderStatus = useCallback(async (id: string, status: Order['status']) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 400));
      const updated = orders.map(o => o.id === id ? { ...o, status } : o);
      saveOrders(updated);
    } finally {
      setLoading(false);
    }
  }, [orders]);

  const deleteOrder = useCallback(async (id: string) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 400));
      const updated = orders.filter(o => o.id !== id);
      saveOrders(updated);
    } finally {
      setLoading(false);
    }
  }, [orders]);

  return {
    orders,
    loading,
    updateOrderStatus,
    deleteOrder
  };
}
