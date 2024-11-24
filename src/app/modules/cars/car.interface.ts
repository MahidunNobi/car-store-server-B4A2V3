enum carCategory {
  Sedan = 'Sedan',
  SUV = 'SUV',
  Truck = 'Truck',
  Coupe = 'Coupe',
  Convertible = 'Convertible',
}

export type TCar = {
  brand: string;
  model: string;
  year: number;
  price: number;
  category: carCategory;
  description: string;
  quantity: number;
  inStock: boolean;
};
