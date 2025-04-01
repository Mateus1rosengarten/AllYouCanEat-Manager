import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleFavorite } from '../src/redux/favoriteSlice';
import { addItem } from '../src/redux/menuSlice';
import { RootState } from '../src/redux/store';
import { Item } from '../src/types/types';

interface CountParams {
  itemName: string;
}

export const useMenuHandlers = (menuItems: Item[]) => {
  const [count, setCount] = useState<Record<string, number>>({});
  const [sortedPizzas, setSortedPizzas] = useState<Item[]>(menuItems);
  const menu = useSelector((state: RootState) => state.menu.menu);
  const favorites = useSelector((state: RootState) => state.favorite.favorites);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIncrement = ({ itemName }: CountParams) => {
    setCount((prev) => ({
      ...prev,
      [itemName]: (prev[itemName] || 0) + 1,
    }));
  };

  const handleDecrement = (itemName: string) => {
    setCount((prev) => {
      const newQuantity = Math.max((prev[itemName] || 0) - 1, 0);
      if (newQuantity === 0) {
        const updatedCount = { ...prev };
        delete updatedCount[itemName];
        return updatedCount;
      }

      return {
        ...prev,
        [itemName]: newQuantity,
      };
    });
  };

  const handleSendToCart = (route: string) => {
    console.log('count', count);
    const selectedItems = Object.entries(count)
      .filter(([, quantity]) => quantity > 0)
      .map(([name, quantity]) => ({ name, quantity }));

    if (selectedItems.length === 0) {
      return;
    }
    selectedItems.forEach((item) => {
      dispatch(addItem(item));
    });

    const existingItemsInCart: { name: string; quantity: number }[] =
      JSON.parse(localStorage.getItem('ItemsCart') || '[]');

    localStorage.setItem(
      'ItemsCart',
      JSON.stringify([...existingItemsInCart, ...selectedItems])
    );

    setCount({});

    navigate(route);
  };

  const handleSortFavorites = (pizzas: Item[]) => {
    const sorted = pizzas.sort((a, b) => {
      const isFavoriteA = favorites.includes(a.name);
      const isFavoriteB = favorites.includes(b.name);
      if (isFavoriteA && !isFavoriteB) return -1;
      if (!isFavoriteA && isFavoriteB) return 1;
      return 0;
    });
    setSortedPizzas([...sorted]);
  };

  const handleIsFavorite = (name: string) => {
    dispatch(toggleFavorite(name));
  };

  return {
    handleIncrement,
    handleDecrement,
    handleSendToCart,
    handleSortFavorites,
    handleIsFavorite,
    navigate,
    sortedPizzas,
    favorites,
    count,
    menu,
  };
};
