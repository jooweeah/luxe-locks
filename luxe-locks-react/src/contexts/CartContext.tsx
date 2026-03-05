import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (name: string, price: number) => void;
  removeItem: (name: string) => void;
  changeQty: (name: string, delta: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const saveCart = (cart: CartItem[]) => {
  try {
    localStorage.setItem('luxe-locks-cart', JSON.stringify(cart));
  } catch (e) {
    // localStorage unavailable
  }
};

const loadCart = (): CartItem[] => {
  try {
    const raw = localStorage.getItem('luxe-locks-cart');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item: any) =>
      typeof item.name === 'string' && item.name.length > 0 &&
      typeof item.price === 'number' && item.price > 0 &&
      typeof item.quantity === 'number' && Number.isInteger(item.quantity) && item.quantity > 0
    );
  } catch (e) {
    return [];
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(loadCart);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addToCart = (name: string, price: number) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.name === name);
      if (existing) {
        return prevCart.map(item =>
          item.name === name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { name, price, quantity: 1 }];
      }
    });
  };

  const removeItem = (name: string) => {
    setCart(prevCart => prevCart.filter(item => item.name !== name));
  };

  const changeQty = (name: string, delta: number) => {
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.name === name);
      if (index === -1) return prevCart;

      const newCart = [...prevCart];
      newCart[index].quantity += delta;

      if (newCart[index].quantity <= 0) {
        newCart.splice(index, 1);
      }

      return newCart;
    });
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeItem,
      changeQty,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};