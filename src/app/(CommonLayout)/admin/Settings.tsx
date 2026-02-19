/* eslint-disable @typescript-eslint/no-explicit-any */
import { category00, kitchen00, kitchen01, kitchen02, kitchen03 } from '@/app/assets/assets'
import { CustomModal } from '@/components/cui/CustomModal'
import Image from 'next/image'
import AddCategory from './AddCategory'
import AddKitchenPreset from './AddKitchenPreset'
import AddEquipment from './AddEquipment'
import AddDietaryPreferenceRestriction from './AddDietaryPreferenceRestriction'
import { RiEdit2Line } from 'react-icons/ri'
import { myFetch } from '@/utils/myFetch'
import { formatUrl } from '@/utils/formatUrl'

const Settings = async () => {

  // const dummyCategoriesData = [
  //   { _id: 1, name: "Chinese", image: category01 },
  //   { _id: 2, name: "American", image: category02 },
  //   { _id: 3, name: "Italian", image: category03 },
  //   { _id: 4, name: "Indian", image: category04 },
  //   { _id: 5, name: "Japanese", image: category05 },
  // ]

  const dummyKitchenData = [
    { _id: 1, name: "Standard Home Kitchen", image: kitchen01, tools: ["Oven", "stove-top", "basic pans", "knives"] },
    { _id: 2, name: "Minimal Kitchen", image: kitchen02, tools: ["Stove-top only", "basic tools"] },
    { _id: 3, name: "Well-Equipped", image: kitchen03, tools: ["Oven", "blender", "food processor", "grill pan"] },
  ]

  const resDietary = await myFetch("/dietary?listView=true", { method: "GET", tags: ["admin_dietary"] });
  const resEquipment = await myFetch("/equipment?type=list", { method: "GET", tags: ["admin_equipment"] });
  const resCousine = await myFetch("/cusine", { method: "GET", tags: ["admin_cusine"] });
  const resCousineOptions = await myFetch("/equipment/category", { method: "GET"});

  // console.log("Get Dietary : ", resDietary)
  // console.log("Get Equipment : ", resEquipment)
  console.log("Get Cousine : ", resCousine)
  console.log("Get Cousine Options : ", resCousineOptions)

  return (
    <div className='space-y-8'>
      {/* Categories */}
      <div className='space-y-4'>
        <h2 className='text-lg text-gray-700 font-semibold'>Categories</h2>
        <div className='flex gap-2 flex-wrap'>
          {resCousine?.data?.map((category: any) => (
            <CustomModal key={category._id} trigger={<div className='flex flex-col items-center'>
              <Image src={formatUrl(category.image)} width={1000} height={1000} alt={category.name} className='w-20 h-20 object-contain' />
              <h3>{category.name}</h3>
            </div>} title={"Add Category"} >
              <AddCategory category={category} />
            </CustomModal>
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
          {resEquipment?.data?.map((singleEquipment: any, idx: number) => (
            <div key={idx}>
              <p className='font-semibold px-1 pb-1'>{singleEquipment.category}</p>
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
              <p className='font-semibold px-1 pb-1'>{singleDietary._id}</p>
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