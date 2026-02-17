
"use client";

import Image from 'next/image'
import React, { Suspense } from 'react'
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { TbChecks } from "react-icons/tb";
import { useRouter } from 'next/navigation';
// import { myFetch } from '@/utils/myFetch';
import dayjs from 'dayjs';
import { CustomSearchBar } from '@/components/cui/CustomSearchBar';
import { userImage } from '@/app/assets/assets';
import CustomStep from '@/components/cui/CustomStep';
import { StepDataType } from '@/types/type';
// import { useSocket } from '@/lib/SocketContext';

interface IChatItem {
  profile?: string;
  id: number;
  role: "admin" | "user";
  name: string;
  lastMessage: string;
  time: string;
  status: string;
}

const stepDatas: StepDataType[] = [
  { id: 1, title: "All" },
  { id: 2, title: "Customer" },
  { id: 3, title: "Chef" },
];

export const chatItems: IChatItem[] = [
  {
    profile: "https://res.cloudinary.com/dbq7y6byo/image/upload/v1750680842/avatars/user_itpwmf.jpg",
    id: 1,
    role: "admin",
    name: "Max Mustermann",
    lastMessage: "Please review the latest booking report.",
    time: "2026-02-17T09:00:00Z",
    status: "Seen"
  },
  {
    profile: "https://res.cloudinary.com/dbq7y6byo/image/upload/v1750680842/avatars/user_itpwmf.jpg",
    id: 2,
    role: "user",
    name: "Ari Goldman",
    lastMessage: "Thanks for confirming my reservation!",
    time: "2026-02-17T09:05:00Z",
    status: "Delivered"
  },
  {
    profile: "https://res.cloudinary.com/dbq7y6byo/image/upload/v1750680842/avatars/user_itpwmf.jpg",
    id: 3,
    role: "admin",
    name: "Sarah Lee",
    lastMessage: "We’ve updated the menu options.",
    time: "2026-02-17T09:10:00Z",
    status: "Seen"
  },
  {
    profile: "https://res.cloudinary.com/dbq7y6byo/image/upload/v1750680842/avatars/user_itpwmf.jpg",
    id: 4,
    role: "user",
    name: "John Doe",
    lastMessage: "Can you add a dessert option?",
    time: "2026-02-17T09:15:00Z",
    status: "Pending"
  },
  {
    profile: "https://res.cloudinary.com/dbq7y6byo/image/upload/v1750680842/avatars/user_itpwmf.jpg",
    id: 5,
    role: "admin",
    name: "Emily Carter",
    lastMessage: "Your payment has been processed successfully.",
    time: "2026-02-17T09:20:00Z",
    status: "Seen"
  }
];



const MessageSuspense = () => {
  // const [adminMessage, setAdminMessage] = React.useState<IChatItem[]>(chatItems);
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const searchQuery = searchParams.get('query') || '';
   // handle live chatting
  // const socket = useMemo(() => io(process.env.NEXT_PUBLIC_IMAGE_URL), []);
  // const { socket } = useSocket()

  // const allMessages = async () => {
  //   const res = await myFetch(`/chat/my-chat-list?search=${searchQuery}`);
    
  //   const msgArray = res?.data.map((msg: Record<string, any>) => {
  //     return {
  //       id: msg?.chat?._id,
  //       name: msg?.chat?.participants[0]?.fullName,
  //       profile: msg?.chat?.participants[0]?.profile,
  //       lastMessage: msg?.message?.text,
  //       time: msg?.chat?.updatedAt,
  //       status: msg?.chat?.status,
  //       role: msg?.message?.role
  //     }
  //   });
  //   setAdminMessage(chatItems);
  // };


  // useEffect(() => {

  //   allMessages();

  //   const eventName = "newMessage";

  //   socket.on(eventName, allMessages);
  //   return () => {
  //     socket.off(eventName, allMessages);
  //   };
  // }, [socket, searchQuery]);

  // useEffect(() => {
  //   allMessages();
  // }, []);



  return (
    <div className='py-4'>
      <CustomStep stepDatas={stepDatas} status="step" />
      <div className='max-w-175 py-4'>
       <CustomSearchBar />
      </div>
      <div className='space-y-4'>
        {chatItems.length > 0 && chatItems?.map((msg) => (
          <div onClick={() => router.push(`/messaging?id=${msg.id}`)} key={msg.id} className='bg-white flex items-center gap-4 py-3 px-4 rounded-md hover:bg-yellow-50 transition-colors duration-300 cursor-pointer'>
            <div className='w-12 h-12 rounded-full overflow-hidden'>
              <Image src={msg?.profile || userImage} alt="profile" width={50} height={50} className='w-12.5 h-12.5 object-cover'/>
            </div>
            <div className='flex-1 space-y-2'>

              <div className='flex items-center justify-between'>
                <p className='font-semibold'>{msg?.name || "Example"}</p>
                <p>{dayjs(msg?.time).format('YYYY-MM-DD hh:mm:ss a')}</p>
              </div>

              <div className='flex justify-between'>
                <p className='flex items-center gap-2'>
                  <span>
                    <LuSquareArrowOutUpRight className={(msg?.role === "admin") ? "text-green-500" : "text-red-500 rotate-180"} />
                  </span>
                  <span className='text-gray-600 font-sm'>
                    {msg.lastMessage}
                  </span>
                </p>
                <span>
                  <TbChecks className='text-green-500' />
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Chat() {
  return (
    <Suspense fallback={<div>Loading...</div>} >
      <MessageSuspense />
    </Suspense>
  )
}