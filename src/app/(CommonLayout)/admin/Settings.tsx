/* eslint-disable @typescript-eslint/no-explicit-any */
import { category00, kitchen00 } from '@/app/assets/assets'
import { CustomModal } from '@/components/cui/CustomModal'
import Image from 'next/image'
import AddCategory from './AddCategory'
import AddKitchenPreset from './AddKitchenPreset'
import AddEquipment from './AddEquipment'
import AddDietaryPreferenceRestriction from './AddDietaryPreferenceRestriction'
import { RiEdit2Line } from 'react-icons/ri'
import { myFetch } from '@/utils/myFetch'
import { formatUrl } from '@/utils/formatUrl'

// const categoryOptions =  [
//   "Cooking Appliances",
//   "Pots & Pans",
//   "Tools",
//   "Special Equipment"
// ];

enum EKitchenPresetType {
  COOKING_APPLIANCES = 'Cooking Appliances',
  POTS_PANS = 'Pots & Pans',
  TOOLS = 'Tools',
  SPECIAL_EQUIPMENT = 'Special Equipment'
}

const Settings = async () => {

  const resKitchenPreset = await myFetch("/equipment/kitchen-presets", { method: "GET", tags: ["admin_kitchen_preset"] });
  const resDietary = await myFetch("/dietary?listView=true", { method: "GET", tags: ["admin_dietary"] });
  const resEquipment = await myFetch("/equipment?type=list", { method: "GET", tags: ["admin_equipment"] });
  const resCousine = await myFetch("/cusine", { method: "GET", tags: ["admin_cusine"] });
  const resCousineOptions = await myFetch("/equipment/category", { method: "GET" });

  const resPotsPans = await myFetch(`/equipment?category=Pots %26 Pans`, { method: "GET" });
  const resCookingAppliances = await myFetch(`/equipment?category=${EKitchenPresetType.COOKING_APPLIANCES}`, { method: "GET" });
  const resTools = await myFetch(`/equipment?category=${EKitchenPresetType.TOOLS}`, { method: "GET" });
  const resSpecialEquipment = await myFetch(`/equipment?category=${EKitchenPresetType.SPECIAL_EQUIPMENT}`, { method: "GET" });

  const options = {
    applianceOptions: resCookingAppliances?.data,
    pansOptions: resPotsPans?.data,
    toolsOptions: resTools?.data,
    equipmentOptions: resSpecialEquipment?.data,
  }


  // console.log("Get Dietary : ", resDietary)
  // console.log("Get Equipment : ", resEquipment)
  // console.log("Get Cousine : ", resCousine)
  // console.log("Get Cousine Options : ", resCousineOptions)
  console.log("Get Kitchen Presets : ", resKitchenPreset)
  // console.log("Dropdown List : ", options)

  return (
    <div className='space-y-8'>
      {/* Categories */}
      <div className='space-y-4'>
        <h2 className='text-lg text-gray-700 font-semibold'>Categories</h2>
        <div className='flex gap-2 flex-wrap'>
          {/* {resCousine?.data?.map((category: any) => (
            <CustomModal key={category._id} trigger={<div className='flex flex-col items-center'>
              <Image src={formatUrl(category.image)} width={1000} height={1000} alt={category.name} className='w-20 h-20 object-contain' />
              <h3>{category.name}</h3>
            </div>} title={"Add Category"} >
              <AddCategory category={category} />
            </CustomModal>
          ))} */}
          {resCousine?.data?.map((category: any) => (
            <div key={category._id} className='flex flex-col items-center'>
              <Image src={formatUrl(category.image)} width={1000} height={1000} alt={category.name} className='w-20 h-20 object-contain' />
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
          {resKitchenPreset?.data?.map((category: any) => (
            <div key={category._id} className='flex items-center gap-2 bg-gray-100 px-5 py-4 rounded-md'>
              <Image src={formatUrl(category?.image)} width={1000} height={1000} alt={category?.name} className='w-10 h-10 object-contain' />
              <div>
                <h3>{category?.name}</h3>
                <p className='text-sm text-gray-500'>{category?.items.split(",").join(", ")}</p>
              </div>
            </div>
          ))}
          <CustomModal trigger={<div className='flex items-center gap-2 bg-gray-100 px-5 py-4 rounded-md'>
            <Image src={kitchen00} width={1000} height={1000} alt="Add kitchen" className='w-10 h-10 object-contain' />
            <div>
              <h3>Add New</h3>
            </div>
          </div>} title={"Add Kitchen-Preset"} >
            <AddKitchenPreset options={options} />
          </CustomModal>
        </div>
      </div>

      {/* Kitchen Equipment */}
      <div className='space-y-4'>
        <h2 className='text-lg text-gray-700 font-semibold border-b border-b-gray-100'>Kitchen Equipment</h2>
        <div className='grid grid-cols-4 gap-6 w-full'>
          {resEquipment?.data?.map((singleEquipment: any, idx: number) => (
            <div key={idx}>
              <p className='font-semibold px-1 pb-1 text-[#272727]'>{singleEquipment.category}</p>
              <div className='flex flex-col gap-2'>{
                singleEquipment?.items?.map((category: any, idx: number) => (
                  <div key={idx} className='flex items-center justify-between gap-1 px-2 py-1 bg-gray-100 rounded-sm'>
                    <p>{category.name}</p>
                    <CustomModal trigger={<RiEdit2Line className='size-3 cursor-pointer' />} title={"Add Dietary Preference & Restriction"} >
                      <AddEquipment cousineOptions={resCousineOptions?.data} equipment={{ id: category._id, name: category.name, category: singleEquipment.category }} />
                    </CustomModal>
                  </div>
                ))
              }</div>
            </div>
          ))}
        </div>
        <CustomModal trigger={<button className='px-3 py-1 bg-gray-200 rounded-md cursor-pointer'>Add New</button>} title={"Add Kitchen-Preset"} >
          <AddEquipment cousineOptions={resCousineOptions?.data} />
        </CustomModal>
      </div>

      {/* Dietary Preferences & Restrictions */}
      <div className='space-y-4'>
        <h2 className='text-lg text-gray-700 font-semibold border-b border-b-gray-100'>Dietary Preferences & Restrictions</h2>
        <div className='grid grid-cols-3 gap-6 w-full'>
          {resDietary?.data?.map((singleDietary: any, idx: number) => (
            <div key={idx}>
              <p className='font-semibold px-1 pb-1 text-[#272727]'>{singleDietary._id}</p>
              <div className='flex flex-col gap-2'>{
                singleDietary?.items?.map((category: any, idx: number) => (
                  <div key={idx} className='flex items-center justify-between gap-1 px-2 py-1 bg-gray-100 rounded-sm'>
                    <p>{category.name}</p>
                    <CustomModal trigger={<RiEdit2Line className='size-3 cursor-pointer' />} title={"Add Dietary Preference & Restriction"} >
                      <AddDietaryPreferenceRestriction dietary={{ id: category._id, name: category.name, category: singleDietary._id }} />
                    </CustomModal>
                  </div>
                ))
              }</div>
            </div>
          ))}
        </div>
        <CustomModal trigger={<button className='px-3 py-1 bg-gray-200 rounded-md cursor-pointer'>Add New</button>} title={"Add Dietary Preference & Restriction"} >
          <AddDietaryPreferenceRestriction />
        </CustomModal>
      </div>
    </div>
  )
}

export default Settings