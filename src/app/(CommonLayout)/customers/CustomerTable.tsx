"use client"
import CustomTable from '@/components/table/CustomTable'
import { customerColumns } from '@/tableColumns/customerColumns'
import { ICustomer } from '@/types/columnTypes'

const CustomerTable = ({ data }: { data: ICustomer[] }) => {
  return (
    <div>
      <CustomTable<ICustomer> columns={customerColumns} data={data} path="/customers" />
    </div>
  )
}

export default CustomerTable;