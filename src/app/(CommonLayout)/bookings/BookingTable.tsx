"use client"
import CustomTable from '@/components/table/CustomTable'
import { bookingColumns } from '@/tableColumns/bookingColumns'
import { IBooking } from '@/types/columnTypes'

const BookingTable = ({ data }: { data: IBooking[] }) => {
  return (
    <div>
      <CustomTable<IBooking> columns={bookingColumns} data={data} />
    </div>
  )
}

export default BookingTable