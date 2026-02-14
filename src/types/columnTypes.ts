// import { StaticImageData } from "next/image"

export interface IBooking {
  id: string;
  status: string;
  dateTime: string;
  chef: string;
  customer: string;
  area: string;
  items: number;
  estimatedTime: string;
  actualTime: string | null;
  rate: number;
  updated: string;
}

export interface ICustomer {
  id: string;
  name: string;
  email: string;
  phone: string;
  area: string;
  bookings: number;
  rating: {
    score: number;
    reviews: number;
  };
  lastBooking: string;
}

export interface IReview {
  id: string;
  dateTime: string;
  chef: string;
  averageRating: number;
  kitchenReadiness: number;
  communication: number;
  reviewText: string;
}

export interface INotes {
  id: string;
  updatedAt: string;
  author: string;
  note: string;
}

export interface IMenu {
  id: string;
  title: string;
  menuSection: string;
  dietType: string[];
  allergens: string[];
  ingredients: number;
  prepTime: string;
  cookTime: string | null;
}

export interface ITransaction {
  id: string;
  type: string;
  name: string;
  amount: number;
  time: string;
  hourlyRate: number;
  grossMargin: number;
  status: string;
}

export interface IDiscount {
  id: string;
  code: string;
  type: string; 
  appliesTo: string; 
  minimumOrder: number; 
  usage: {
    used: number;
    total: number;
  };
  status: string;
  validUntil: string; 
  createdBy: string;
}

export interface IAccess {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  lastActivity: string;
}
