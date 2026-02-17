import { category00, category01, category02, category03, category04, category05, kitchen00, kitchen01, kitchen02, kitchen03 } from '@/app/assets/assets'
import { CustomModal } from '@/components/cui/CustomModal'
import Image from 'next/image'
import AddCategory from './AddCategory'
import AddKitchenPreset from './AddKitchenPreset'
import AddEquipment from './AddEquipment'
import AddDietaryPreferenceRestriction from './AddDietaryPreferenceRestriction'
import { RiEdit2Line } from 'react-icons/ri'

const Settings = () => {

  const dummyCategoriesData = [
    { _id: 1, name: "Chinese", image: category01 },
    { _id: 2, name: "American", image: category02 },
    { _id: 3, name: "Italian", image: category03 },
    { _id: 4, name: "Indian", image: category04 },
    { _id: 5, name: "Japanese", image: category05 },
  ]

  const dummyKitchenData = [
    { _id: 1, name: "Standard Home Kitchen", image: kitchen01, tools: ["Oven", "stove-top", "basic pans", "knives"] },
    { _id: 2, name: "Minimal Kitchen", image: kitchen02, tools: ["Stove-top only", "basic tools"] },
    { _id: 3, name: "Well-Equipped", image: kitchen03, tools: ["Oven", "blender", "food processor", "grill pan"] },
  ]

  const cookingAppliances = [
    "Oven",
    "Stove-top",
    "Microwave",
    "Air fryer",
    "Grill (indoor or outdoor)",
    "Rice cooker"
  ];

  const pansAndPots = [
    "Frying pan",
    "Sauce pot",
    "Large pot",
    "Small pot"
  ];

  const kitchenTools = [
    "Sharp knife",
    "Fillet knife",
    "Cutting board",
    "Blender",
    "Food processor"
  ];

  const specialEquipment = [
    "Stand mixer",
    "Sous-vide",
    "Pizza stone",
    "Wok"
  ];

  const allergiesAndIntolerance = [
    "Nuts",
    "Peanuts",
    "Shellfish",
    "Eggs",
    "Dairy & Lactose",
    "Sesame",
    "Gluten",
    "Soy"
  ];

  const religiousEthicalRestrictions = [
    "Halal",
    "Kosher",
    "Vegetarian",
    "Vegan",
    "Pescetarian",
    "No Pork",
    "No Beef"
  ];

  const preferencesLifestyle = [
    "Low Carb",
    "High Protein",
    "Keto",
    "Paleo",
    "Low Sugar",
    "Not Spicy",
    "Extra Spicy",
    "Healthy"
  ];

  return (
    <div className='space-y-8'>
      {/* Categories */}
      <div className='space-y-4'>
        <h2 className='text-lg text-gray-700 font-semibold'>Categories</h2>
        <div className='flex gap-2 flex-wrap'>
          {dummyCategoriesData.map((category) => (
            <div key={category._id} className='flex flex-col items-center'>
              <Image src={category.image} width={1000} height={1000} alt={category.name} className='w-20 h-20 object-contain' />
              <h3>{category.name}</h3>
            </div>
          ))}
          <CustomModal trigger={<div className='flex flex-col items-center'>
            <Image src={category00} width={1000} height={1000} alt="New Category" className='w-20 h-20 object-contain' />
            <h3>Add Category</h3>
          </div>} title={"Add Category"} >
            <AddCategory />
          </CustomModal>
        </div>
      </div>

      {/* Kitchen Presets */}
      <div className='space-y-4'>
        <h2 className='text-lg text-gray-700 font-semibold'>Kitchen-Presets</h2>
        <div className='grid grid-cols-2 gap-3 w-full max-w-200'>
          {dummyKitchenData.map((category) => (
            <div key={category._id} className='flex items-center gap-2 bg-gray-100 px-5 py-4 rounded-md'>
              <Image src={category.image} width={1000} height={1000} alt={category.name} className='w-10 h-10 object-contain' />
              <div>
                <h3>{category.name}</h3>
                <p className='text-sm text-gray-500'>{category.tools.join(", ")}</p>
              </div>
            </div>
          ))}
          <CustomModal trigger={<div className='flex items-center gap-2 bg-gray-100 px-5 py-4 rounded-md'>
            <Image src={kitchen00} width={1000} height={1000} alt="Add kitchen" className='w-10 h-10 object-contain' />
            <div>
              <h3>Add New</h3>
            </div>
          </div>} title={"Add Kitchen-Preset"} >
            <AddKitchenPreset />
          </CustomModal>
        </div>
      </div>

      {/* Kitchen Equipment */}
      <div className='space-y-4'>
        <h2 className='text-lg text-gray-700 font-semibold border-b border-b-gray-100'>Kitchen Equipment</h2>
        <div className='grid grid-cols-4 gap-6 w-full'>
          <div>
            <p className='font-semibold px-1 pb-1'>Cooking Appliances</p>
            <div className='flex flex-col gap-2'>{
              cookingAppliances.map((category, idx) => (
                <div key={idx} className='flex items-center justify-between gap-1 px-2 py-1 bg-gray-100 rounded-sm'>
                  <p>{category}</p>
                  <CustomModal trigger={<RiEdit2Line className='size-3 cursor-pointer' />} title={"Add Kitchen-Preset"} >
                    <AddEquipment />
                  </CustomModal>
                </div>
              ))
            }</div>
          </div>
          <div>
            <p className='font-semibold  px-1 pb-1'>Pans & Pots</p>
            <div className='flex flex-col gap-2'>{
              pansAndPots.map((category, idx) => (
                <div key={idx} className='flex items-center justify-between gap-1 px-2 py-1 bg-gray-100 rounded-sm'>
                  <p>{category}</p>
                  <CustomModal trigger={<RiEdit2Line className='size-3 cursor-pointer' />} title={"Add Kitchen-Preset"} >
                    <AddEquipment />
                  </CustomModal>
                </div>
              ))
            }</div>
          </div>
          <div>
            <p className='font-semibold  px-1 pb-1'>Tools</p>
            <div className='flex flex-col gap-2'>{
              kitchenTools.map((category, idx) => (
                <div key={idx} className='flex items-center justify-between gap-1 px-2 py-1 bg-gray-100 rounded-sm'>
                  <p>{category}</p>
                  <CustomModal trigger={<RiEdit2Line className='size-3 cursor-pointer' />} title={"Add Kitchen-Preset"} >
                    <AddEquipment />
                  </CustomModal>
                </div>
              ))
            }</div>
          </div>
          <div>
            <p className='font-semibold  px-1 pb-1'>Special Equipment</p>
            <div className='flex flex-col gap-2'>{
              specialEquipment.map((category, idx) => (
                <div key={idx} className='flex items-center justify-between gap-1 px-2 py-1 bg-gray-100 rounded-sm'>
                  <p>{category}</p>
                  <CustomModal trigger={<RiEdit2Line className='size-3 cursor-pointer' />} title={"Add Kitchen-Preset"} >
                    <AddEquipment />
                  </CustomModal>
                </div>
              ))
            }</div>
          </div>
        </div>
        <CustomModal trigger={<button className='px-3 py-1 bg-gray-200 rounded-md cursor-pointer'>Add New</button>} title={"Add Kitchen-Preset"} >
          <AddEquipment />
        </CustomModal>
      </div>

      {/* Dietary Preferences & Restrictions */}
      <div className='space-y-4'>
        <h2 className='text-lg text-gray-700 font-semibold border-b border-b-gray-100'>Dietary Preferences & Restrictions</h2>
        <div className='grid grid-cols-3 gap-6 w-full'>
          <div>
            <p className='font-semibold px-1 pb-1'>Allergies & Intolerance</p>
            <div className='flex flex-col gap-2'>{
              allergiesAndIntolerance.map((category, idx) => (
                <div key={idx} className='flex items-center justify-between gap-1 px-2 py-1 bg-gray-100 rounded-sm'>
                  <p>{category}</p>
                  <CustomModal trigger={<RiEdit2Line className='size-3 cursor-pointer' />} title={"Add Dietary Preference & Restriction"} >
                    <AddDietaryPreferenceRestriction />
                  </CustomModal>
                </div>
              ))
            }</div>
          </div>
          <div>
            <p className='font-semibold  px-1 pb-1'>Religious & Ethical Restrictions</p>
            <div className='flex flex-col gap-2'>{
              religiousEthicalRestrictions.map((category, idx) => (
                <div key={idx} className='flex items-center justify-between gap-1 px-2 py-1 bg-gray-100 rounded-sm'>
                  <p>{category}</p>
                  <CustomModal trigger={<RiEdit2Line className='size-3 cursor-pointer' />} title={"Add Dietary Preference & Restriction"} >
                    <AddDietaryPreferenceRestriction />
                  </CustomModal>
                </div>
              ))
            }</div>
          </div>
          <div>
            <p className='font-semibold  px-1 pb-1'>Preferences & Lifestyle</p>
            <div className='flex flex-col gap-2'>{
              preferencesLifestyle.map((category, idx) => (
                <div key={idx} className='flex items-center justify-between gap-1 px-2 py-1 bg-gray-100 rounded-sm'>
                  <p>{category}</p>
                  <CustomModal trigger={<RiEdit2Line className='size-3 cursor-pointer' />} title={"Add Dietary Preference & Restriction"} >
                    <AddDietaryPreferenceRestriction />
                  </CustomModal>
                </div>
              ))
            }</div>
          </div>
        </div>
        <CustomModal trigger={<button className='px-3 py-1 bg-gray-200 rounded-md cursor-pointer'>Add New</button>} title={"Add Dietary Preference & Restriction"} >
          <AddDietaryPreferenceRestriction />
        </CustomModal>
      </div>
    </div>
  )
}

export default Settings