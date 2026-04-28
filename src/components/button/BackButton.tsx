"use client"
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React from 'react'

const BackButton = ({ children, callBackUrl, className }: { children: React.ReactNode, callBackUrl?: string, className?: string }) => {
  const router = useRouter();
  return (
    <div onClick={() => callBackUrl ? router.push(callBackUrl) : router.back()} className={cn("cursor-pointer", className)}>
      {children}
    </div>
  )
}

export default BackButton