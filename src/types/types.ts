export type TPropertyTypes = {
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
  email: string;
};

export type LoginInputs = {
  _id: string;
  name: string;
  email: string;
  password: string;
  number: string;
  date: string;
  role: "Admin" | "Agent";
  address: string;
  image: string;
  subject: string;
  message: string;
};
export type TParams = {
  AllPropertyId: string;
  AgentDetailsId: string;
  AgentId: string;
  PropertyId: string;
};
export type UpdateProfileModalProps = {
  onClose: () => void;
};
