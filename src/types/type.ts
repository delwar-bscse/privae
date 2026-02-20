export type StepDataType = {
  id: number
  title: string
  label?: string
}

export type KitchenPresetFormValues = {
  name: string;
  image?: FileList;
  description: string;
  pansAndPots: string[];
  tools: string[];
  cookingAppliances: string[];
  specialEquipment: string[];
};

export type TMessage = {
  role: string;
  _id: string;
  text: string;
  image: string | null;
  seen: boolean;
  sender: {
    _id: string;
    fullName: string;
    role: string;
  };
  receiver: string;
  chatId: string;
  createdAt: string;
  updatedAt: string;
}