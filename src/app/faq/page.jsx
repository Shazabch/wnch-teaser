import Faq from '@/common/module/Faq'
import React from 'react'

export const metadata = {
  title: 'FAQ & Documentation - WNCH Hub',
  description: 'Knowledge base and frequently asked questions for WNCH Hub.',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <Faq />
    </div>
  )
}

export default page
