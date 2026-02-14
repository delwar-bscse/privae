"use client"

import CustomTable2 from '@/components/table/CustomTable2'
import { discountColumns } from '@/tableColumns/discountColumns'
import { IDiscount } from '@/types/columnTypes'

const Discount = ({ data }: { data: IDiscount[] }) => {
  return (
    <div>
      <CustomTable2<IDiscount> columns={discountColumns} data={data} />
    </div>
  )
}

export default Discount