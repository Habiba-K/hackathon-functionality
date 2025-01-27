export interface Product {
    _id: string;
    title: string;
    _type: "product";
    description?: string;
    productImage?: {
      asset: {
        _ref: string;
        _type: "image";
      };
    };
    price: number;
    tags: string[];
    dicountPercentage : number;
    slug: {
      _type: "slug";
      current: string;
    };
    rating?: number; // Rating (1-5)
    stock: number; // Stock quantity
    colors: string[]; // Available colors
    sizes: string[]; // Available sizes
    quantity: number; // Default quantity
  }
  