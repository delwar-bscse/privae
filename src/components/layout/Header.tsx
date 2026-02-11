import Image from 'next/image'
import Link from 'next/link';
import { userImage } from '@/app/assets/assets';
import DashboardTitle from './DashboardTitle';
export const dynamic = "force-dynamic";

const Header = () => {

  const data = {
    name: "Md. Delwar Hossain",
    role: "Admin"
  }

  // const user = await myFetch(`/profile`,
  //   { method: 'GET' }
  // );
  // const profile = formatUrl(user?.data?.image);

  return (
    <div className='flex justify-between items-center'>
      <DashboardTitle />
      <div className='h-full flex items-center justify-end gap-2 px-2 py-4'>
        <Link id="goProfile" href={'/dashboard/profile'} className='h-full flex gap-3 items-center group bg-gray-50 rounded-lg px-2 py-1.5'>
          <div className='flex items-center justify-center'>
            <Image src={userImage} width={100} height={100} alt="profileImage" className='w-12.5 h-12.5 rounded-full object-fit border' />
          </div>
          <p className='flex flex-col'>
            <span className='font-semibold text-lg text-gray-800 group-hover:text-gray-500 transition-colors duration-300'>{data.name}</span>
            <span className='font-semibold text-sm text-gray-700 group-hover:text-gray-400 transition-colors duration-300'>{data.role}</span>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Header