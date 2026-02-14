"use client"

import CustomTable2 from '@/components/table/CustomTable2'
import { accessColumns } from '@/tableColumns/accessColumns'
import { IAccess } from '@/types/columnTypes'

const AccessComponent = ({ data }: { data: IAccess[] }) => {
  return (
    <div>
      <CustomTable2<IAccess> columns={accessColumns} data={data} />
    </div>
  )
}

export default AccessComponent