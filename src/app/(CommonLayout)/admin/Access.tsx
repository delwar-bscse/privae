"use client"

import { CustomModal } from '@/components/cui/CustomModal'
import CustomTable2 from '@/components/table/CustomTable2'
import { accessColumns } from '@/tableColumns/accessColumns'
import { IAccess } from '@/types/columnTypes'
import AddUser from './AddUser'

const AccessComponent = ({ data }: { data: IAccess[] }) => {
  return (
    <div className=''>
      <div className="min-h-[calc(100vh-200px)]">
        <CustomTable2<IAccess> columns={accessColumns} data={data} />
      </div>
      <div className="">
        <CustomModal trigger={<button className="bg-[#F2F2F2] rounded-sm px-3 py-2 text-gray-700 font-semibold cursor-pointer">Add User</button>} title={"Add User"} >
          <AddUser />
        </CustomModal>
      </div>
    </div>
  )
}

export default AccessComponent