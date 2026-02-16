import React from 'react'
import LoginForm from './LoginForm'
import WelcomeHero from './Welcome'

const page = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <WelcomeHero />
      <LoginForm />
    </div>
  )
}

export default page