import React from 'react'
import Chat from './Chat'
import Inbox from './Inbox'

const page = () => {
  return (
    <div className="flex gap-4 px-2">
      <div>
        <Chat />
      </div>
      <div className="flex-1">
        <Inbox />
      </div>
    </div>
  )
}

export default page