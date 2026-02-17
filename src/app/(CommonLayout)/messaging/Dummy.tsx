
"use client";

import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { IoIosSend } from "react-icons/io";
import dayjs from "dayjs";
// import { myFetch } from "@/utils/myFetch";
// import { useParams } from "next/navigation";
import { TMessage } from "@/types/type";
// import { debounce } from "lodash";
// import { useSocket } from "@/lib/SocketContext";

export const dummyMessages: TMessage[] = [
  {
    role: "user",
    _id: "msg001",
    text: "Hello, I’d like to book a chef for tomorrow evening.",
    image: null,
    seen: true,
    sender: {
      _id: "user001",
      fullName: "John Doe",
      role: "Customer"
    },
    receiver: "chef001",
    chatId: "chat001",
    createdAt: "2026-02-17T09:00:00Z",
    updatedAt: "2026-02-17T09:05:00Z"
  },
  {
    role: "assistant",
    _id: "msg002",
    text: "Sure! Could you please share the number of guests?",
    image: null,
    seen: true,
    sender: {
      _id: "assistant001",
      fullName: "Private Chef Bot",
      role: "Admin"
    },
    receiver: "user001",
    chatId: "chat001",
    createdAt: "2026-02-17T09:06:00Z",
    updatedAt: "2026-02-17T09:06:00Z"
  },
  {
    role: "user",
    _id: "msg003",
    text: "We’ll have 6 guests, mostly vegetarian.",
    image: null,
    seen: true,
    sender: {
      _id: "user001",
      fullName: "John Doe",
      role: "Customer"
    },
    receiver: "chef001",
    chatId: "chat001",
    createdAt: "2026-02-17T09:07:00Z",
    updatedAt: "2026-02-17T09:07:00Z"
  },
  {
    role: "assistant",
    _id: "msg004",
    text: "Perfect, I’ll prepare a vegetarian-friendly menu with a few non-veg options.",
    image: null,
    seen: false,
    sender: {
      _id: "assistant001",
      fullName: "Private Chef Bot",
      role: "Admin"
    },
    receiver: "user001",
    chatId: "chat001",
    createdAt: "2026-02-17T09:08:00Z",
    updatedAt: "2026-02-17T09:08:00Z"
  },
  {
    role: "user",
    _id: "msg005",
    text: "Sounds great! Can you also include a dessert?",
    image: null,
    seen: false,
    sender: {
      _id: "user001",
      fullName: "John Doe",
      role: "Customer"
    },
    receiver: "chef001",
    chatId: "chat001",
    createdAt: "2026-02-17T09:09:00Z",
    updatedAt: "2026-02-17T09:09:00Z"
  }
];

// const SCROLL_THRESHOLD = 60; // px from bottom to be considered "sticky"

const AdminInbox = () => {
  // const [msgs, setMsgs] = useState<TMessage[]>(dummyMessages); // keep as oldest -> newest
  // const [page, setPage] = useState(1);              // page for older history
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null); // sentinel at bottom
  // const isNearBottom = useRef(true); // track if user was at bottom before updates

  // const params = useParams();
  // const rawMsgId = params["inbox"];
  // const msgId = Array.isArray(rawMsgId) ? rawMsgId[0] : (rawMsgId as string | undefined);

  // const { socket } = useSocket();

  // ---- helpers ----
  // const getIsNearBottom = () => {
  //   const el = messageContainerRef.current;
  //   if (!el) return true;
  //   const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
  //   return distanceFromBottom < SCROLL_THRESHOLD;
  // };

  // const scrollToBottom = () => {
  //   const el = messageContainerRef.current;
  //   if (!el) return;
  //   el.scrollTop = el.scrollHeight;
  // };

  // const preserveScrollOnPrepend = (prevHeight: number) => {
  //   const el = messageContainerRef.current;
  //   if (!el) return;
  //   const newHeight = el.scrollHeight;
  //   el.scrollTop = newHeight - prevHeight;
  // };

  // ---- fetch messages (keep oldest -> newest) ----
  // const fetchMessages = async (pageNumber: number) => {
  //   if (!msgId) return;

  //   try {
  //     setLoading(true);
  //     const prevHeight = messageContainerRef.current?.scrollHeight || 0;

  //     const res = await myFetch(`/message/my-messages/${msgId}?page=${pageNumber}&limit=20`);
  //     const list: TMessage[] = res?.data?.result ?? [];

  //     // Ensure each fetched page is sorted oldest -> newest
  //     const normalized = list
  //       .slice()
  //       .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

  //     setMsgs(prev => {
  //       if (pageNumber > 1) {
  //         // prepend older history
  //         return [...normalized, ...prev];
  //       }
  //       // first load / refresh
  //       return normalized;
  //     });

  //     requestAnimationFrame(() => {
  //       if (pageNumber > 1) {
  //         preserveScrollOnPrepend(prevHeight);
  //       } else {
  //         scrollToBottom();
  //       }
  //     });
  //   } catch (err) {
  //     console.error("Error fetching messages:", err);
  //     setError("Failed to fetch messages.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Initial fetch whenever msgId becomes available
  // useEffect(() => {
  //   if (!msgId) return;
  //   setPage(1);
  //   fetchMessages(1);
  // }, [msgId]);

  // ---- scroll listener: load older when at top; track stickiness ----
  // const handleScroll = useMemo(
  //   () =>
  //     debounce(() => {
  //       const el = messageContainerRef.current;
  //       if (!el) return;

  //       // keep isNearBottom updated continuously
  //       isNearBottom.current = getIsNearBottom();

  //       if (!loading && msgs.length > 0 && el.scrollTop === 0) {
  //         const newPage = page + 1;
  //         setPage(newPage);
  //         fetchMessages(newPage);
  //       }
  //     }, 120),
  //   [loading, msgs.length, page, msgId]
  // );

  // useEffect(() => {
  //   return () => handleScroll.cancel();
  // }, [handleScroll]);

  // ---- auto-stick to bottom on render IF user was near bottom before ----
  // useLayoutEffect(() => {
  //   if (isNearBottom.current) {
  //     scrollToBottom();
  //   }
  // }, [msgs]);

  // ---- socket: append new message (newest at end) ----
  // useEffect(() => {
  //   if (!msgId || !socket) return;

  //   const eventName = "new-message::" + msgId;

  //   const onNewMsg = (newMsg: TMessage) => {
  //     // snapshot stickiness before mutating
  //     isNearBottom.current = getIsNearBottom();

  //     setMsgs(prev => [...prev, newMsg]); // append at end

  //     requestAnimationFrame(() => {
  //       if (isNearBottom.current) scrollToBottom();
  //     });
  //   };

  //   socket.on(eventName, onNewMsg);
  //   return () => {
  //     socket.off(eventName, onNewMsg);
  //   };
  // }, [msgId, socket]);

  // ---- send message ----
  // const sendMessage = async () => {
  //   if (!inputRef.current) return;
  //   const value = inputRef.current.value.trim();
  //   if (!value || !msgId) return;

  //   const formData = new FormData();
  //   formData.append("chatId", msgId);
  //   formData.append("text", value);

  //   inputRef.current.value = "";

  //   try {
  //     const res = await myFetch("/message/send-messages", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (!res?.success) {
  //       setError("Failed to send message.");
  //     }

  //   } catch (err) {
  //     console.error("Error sending message:", err);
  //     setError("Error sending message. Please try again.");
  //   }
  // };

  return (
    <div className="w-full max-w-250 mx-auto h-[90vh] flex flex-col justify-between py-8">
      {/* Messages list */}
      <div
        ref={messageContainerRef}
        className="flex-1 overflow-y-auto hide-scrollbar"
        // onScroll={handleScroll}
      >
        {/* normal flow: oldest -> newest, newest ends at the bottom */}
        <div className="flex flex-col justify-end gap-4">
          {dummyMessages.map((m) => (
            <div
              key={m?._id}
              className={`${m?.sender?.role === "Admin" ? "flex-row-reverse" : "flex-row"} flex gap-4 group`}
            >
              <div
                className={`${m?.sender?.role === "Admin" ? "bg-[#222222]" : "bg-[#F1F1F1]"} p-4 rounded-2xl  w-125 2xl:w-150`}
              >
                <p className={`${m?.sender?.role === "Admin" ? "text-[#F1F1F1]" : "text-[#222222]"} wrap-break-word`}>{m?.text}</p>
                <p className={`text-right ${m?.sender?.role === "Admin" ? "text-gray-200" : "text-gray-600"} pt-4 text-sm`}>
                  {dayjs(m?.createdAt).format("YYYY-MM-DD hh:mm:ss A")}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* sentinel stays at bottom */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex items-center gap-4 pt-4">
        <Input
          ref={inputRef}
          type="text"
          // variant="msgField"
          placeholder="Type..."
          className="flex-1 transition-all duration-300"
          // disabled={loading}
          // onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          // onClick={sendMessage}
          // disabled={loading}
          className={`text-2xl bg-white p-2.5 rounded-full shadow-md hover:scale-105 transition-all duration-300 ${false ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
          aria-label="Send message"
        >
          <IoIosSend className="text-gray-600 hover:text-gray-400 transition-all duration-300 text-2xl" />
        </button>
      </div>

      {/* Error */}
      {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}
    </div>
  );
};

export default AdminInbox;
