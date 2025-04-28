// Confirmation Page

export interface CartItem {
  name: string;
  quantity: number;
}

export interface CartState {
  menu: CartItem[];
}

// Menu Pages

export interface Item {
  name: string;
  description: string;
  isVeg: boolean;
  noLactose: boolean;
  isFav: boolean;
}

export interface DrinkItem {
  name: string;
  price: number;
  drinkIcon: string;
}

export interface CupsItem {
  name: string;
  drinkIcon: string;
  drinkIcon2: string;
}

// User Data

export interface Favorites {
  favorites: string[];
}

export interface UserData {
  table: string;
  totalToPay: number;
  historyOfOrders: CartItem[];
  statusWaiter: boolean;
  statusBill: boolean;
}

export interface CartHistory {
  history: CartItem[];
}
