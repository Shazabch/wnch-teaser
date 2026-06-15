import About from '@/common/module/About'
import React from 'react'


export const metadata = {
  title: 'About Us - WNCH Hub',
  description: 'Learn about the team and mission behind WNCH Hub.',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <About />
    </div>
  )
}

export default page
