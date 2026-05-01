export interface Product {
  id: string;
  name: string;
  category: "coffee" | "tea" | "pastry" | "beans";
  price: number;
  sizes?: { size: string; price: number }[];
  options?: { name: string; choices: string[] }[];
  image: string;
  description: string;
  badge?: string;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  options?: Record<string, string>;
  image: string;
}

export interface Order {
  items: CartItem[];
  total: number;
  customerInfo: {
    name: string;
    phone: string;
  };
  pickupTime?: string;
  notes?: string;
}

export type CategoryTab = "coffee" | "tea" | "pastry" | "beans" | "all";
