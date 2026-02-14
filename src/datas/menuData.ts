import { IMenu } from "@/types/columnTypes";

export const dummyMenusData: IMenu[] = [
  {
    id: "00001",
    title: "Rice & Chicken",
    menuSection: "Main",
    dietType: ["Kosher", "Healthy"],
    allergens: [],
    ingredients: 7,
    prepTime: "5 minutes",
    cookTime: "12 minutes"
  },
  {
    id: "00002",
    title: "Tiramisu",
    menuSection: "Dessert",
    dietType: ["Vegetarian", "Italian"],
    allergens: ["Milk"],
    ingredients: 9,
    prepTime: "25 minutes",
    cookTime: null
  },
  {
    id: "00003",
    title: "Waldorf Salad",
    menuSection: "Starter",
    dietType: ["Vegetarian"],
    allergens: ["Milk"],
    ingredients: 6,
    prepTime: "12 minutes",
    cookTime: "20 minutes"
  }
];