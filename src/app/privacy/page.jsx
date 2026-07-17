import Privacy from '@/common/module/Privacy'
import React from 'react'

export const metadata = {
  title: 'Privacy Policy - WNCH Hub',
  description: 'Privacy Policy and data protection terms for WNCH Hub.',
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center w-full'>
      <Privacy />
    </div>
  )
}

export default page
