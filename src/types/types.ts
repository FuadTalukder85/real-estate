export type PropertyTypes = {
  _id: string;
  propertyName: string;
  propertyImage01: string;
  propertyImage02: string;
  propertyImage03: string;
  propertyImage04: string;
  price: number;
  propertyFor: string;
  propertyCategory: string;
  bedroom: number;
  bathroom: number;
  squareFoot: number;
  floor: number;
  buildYear: number;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  description: string;
  postBy: string;
  status: "approved" | "pending";
};

export type LoginInputs = {
  name: string;
  email: string;
  password: string;
};
