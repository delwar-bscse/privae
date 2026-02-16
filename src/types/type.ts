export type StepDataType = {
  id: number
  title: string
  label?: string
}

export type KitchenPresetFormValues = {
  name: string;
  description: string;
  pansAndPots: string[];
  tools: string[];
  cookingAppliances: string[];
  specialEquipment: string[];
};
