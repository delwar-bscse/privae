"use client"

import { CustomModal } from '@/components/cui/CustomModal'
import CustomTable2 from '@/components/table/CustomTable2'
import { discountColumns } from '@/tableColumns/discountColumns'
import { IDiscount } from '@/types/columnTypes'
import PromoCodeForm from './PromoCodeForm'

const Discount = ({ data }: { data: IDiscount[] }) => {
  return (
    <div>
      <CustomTable2<IDiscount> columns={discountColumns} data={data} />
      {/* Actions */}
      <div className="flex gap-3 pt-8">
        <CustomModal trigger={<button className="bg-[#F2F2F2] rounded-md px-4 py-1 text-gray-700 text-sm font-semibold cursor-pointer">Add Promo Code</button>} title={"Add Promo Code"} contentClass="w-[500px] rounded-2xl">
          <PromoCodeForm />
        </CustomModal>
      </div>
    </div>
  )
}

export default Discount