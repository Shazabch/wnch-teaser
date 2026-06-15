import SolutionPage from '@/common/module/Solution/component/SolutionPage'
import React from 'react'

export const metadata = {
  title: 'Solution - WNCH Hub',
  description: 'Solutions and apps for the towing and dispatch industry.',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <SolutionPage />
    </div>
  )
}

export default page
