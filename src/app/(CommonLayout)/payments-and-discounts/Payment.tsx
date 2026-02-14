"use client"
import CustomTable from '@/components/table/CustomTable'
import { transactionColumns } from '@/tableColumns/transactionColumns'
import { ITransaction } from '@/types/columnTypes'

const Payment = ({ data }: { data: ITransaction[] }) => {
  return (
    <div>
      <CustomTable<ITransaction> columns={transactionColumns} data={data} />
    </div>
  )
}

export default Payment