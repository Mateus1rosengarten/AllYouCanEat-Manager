import { images } from '../../utils/images';
import { CupsItem, DrinkItem, Item } from '../types/types';

export const pizzas: Item[] = [
  {
    name: 'Margerita',
    description: 'Mussarela | Tomate | Azeitonas',
    isVeg: true,
    noLactose: false,
    isFav: false,
  },
  {
    name: '3 Queijos',
    description: 'Mussarela | Provolone | Catupiry',
    isVeg: true,
    noLactose: false,
    isFav: false,
  },
  {
    name: 'Portuguesa',
    description: 'Mussarela | Presunto | Ovo | Azeitonas | Cebola',
    isVeg: false,
    noLactose: false,
    isFav: false,
  },
  {
    name: 'Frango com Catupiry',
    description: 'Mussarela | Frango | Catupiry',
    isVeg: false,
    noLactose: false,
    isFav: false,
  },
  {
    name: 'Vegetariana',
    description: 'Palmito | Tomate | Cebola | Azeitonas',
    isVeg: true,
    noLactose: true,
    isFav: false,
  },
];

export const pizzasEspeciais: Item[] = [
  {
    name: 'Tomate Seco com Rúcula e Azeitona',
    description: 'Tomate Seco | Rúcula | Azeitonas',
    isVeg: true,
    noLactose: true,
    isFav: false,
  },
  {
    name: 'Catupiry',
    description: 'Mussarela | Catupiry Original',
    isVeg: true,
    noLactose: false,
    isFav: false,
  },
  {
    name: 'Strogonoff',
    description:
      'Mussarela | Frango | Molho Strogonoff | Champignon | Batata Palha',
    isVeg: false,
    noLactose: false,
    isFav: false,
  },
  {
    name: 'Salmão Defumado com Cream Cheese',
    description: 'Mussarela | Salmão Defumado | Cream Cheese',
    isVeg: false,
    noLactose: false,
    isFav: false,
  },
];

export const pizzasDoces: Item[] = [
  {
    name: 'Chocolate Preto',
    description: 'Chocolate | Amendoim | Confetes',
    isVeg: true,
    noLactose: false,
    isFav: false,
  },
  {
    name: 'Sensação',
    description: 'Chocolate | Morango',
    isVeg: true,
    noLactose: false,
    isFav: false,
  },
  {
    name: 'Chocolate Branco',
    description: 'Chocolate Branco | Morango',
    isVeg: true,
    noLactose: false,
    isFav: false,
  },
];

export const massas: Item[] = [
  {
    name: 'Lasanha 4 Queijos',
    description: 'Mussarela | Parmesão | Provolone | Cheddar',
    isVeg: true,
    noLactose: false,
    isFav: false,
  },
  {
    name: 'Lasanha Funghi',
    description: 'Mussarela | Parmesão | Cogumelos | Molho Funghi',
    isVeg: true,
    noLactose: false,
    isFav: false,
  },
  {
    name: 'Nhoque Ao Sugo',
    description: 'Mussarela | Molho vermelho',
    isVeg: true,
    noLactose: false,
    isFav: false,
  },
  {
    name: 'Spaghetti Molho Branco',
    description: 'Mussarela | Molho Branco | Parmesão Ralado',
    isVeg: true,
    noLactose: false,
    isFav: false,
  },
];

export const drinks: DrinkItem[] = [
  { name: 'Coca Cola 2L', price: 12.0, drinkIcon: images.coke },
  { name: 'Coca Cola 600ml', price: 8.0, drinkIcon: images.coke },
  { name: 'Coca Cola Zero 600ml', price: 8.0, drinkIcon: images.cokeZero },
  { name: 'Agua', price: 6.0, drinkIcon: images.agua },
  { name: 'Agua com Gas', price: 6.0, drinkIcon: images.aguagas },
  { name: 'Cerveja Heineken 600ml', price: 18.0, drinkIcon: images.heineken },
  { name: 'Cerveja Original 600ml', price: 16.0, drinkIcon: images.original },
  { name: 'Suco Morango', price: 10.0, drinkIcon: images.morango },
  { name: 'Suco Abacaxi', price: 10.0, drinkIcon: images.ananas },
  { name: 'Suco Laranja', price: 10.0, drinkIcon: images.laranja },
];

export const cups: CupsItem[] = [
  {
    name: 'Copos com somente gelo',
    drinkIcon: images.icecub,
    drinkIcon2: images.icecub,
  },
  {
    name: 'Copos com Gelo e Limão (rodelas)',
    drinkIcon: images.icecub,
    drinkIcon2: images.lemonjuice,
  },
  {
    name: 'Copos com Gelo e Limão (espremido)',
    drinkIcon: images.icecub,
    drinkIcon2: images.lemon,
  },
  {
    name: 'Copos sem Gelo e sem Limão',
    drinkIcon: images.cup,
    drinkIcon2: images.cup,
  },
  {
    name: 'Copos com somente Limão (rodelas)',
    drinkIcon: images.cup,
    drinkIcon2: images.lemonjuice,
  },
  {
    name: 'Copos com somente Limão (espremido)',
    drinkIcon: images.cup,
    drinkIcon2: images.lemon,
  },
];
