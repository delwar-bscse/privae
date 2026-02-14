"use client"
import CustomTable from '@/components/table/CustomTable'
import { chefColumns } from '@/tableColumns/chefColumns'
import { ICustomer } from '@/types/columnTypes'

const ChefTable = ({ data }: { data: ICustomer[] }) => {
  return (
    <div>
      <CustomTable<ICustomer> columns={chefColumns} data={data} path="/chefs" />
    </div>
  )
}

export default ChefTable;