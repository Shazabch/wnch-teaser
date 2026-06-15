import ServicePage from '@/common/module/Service/component/ServicePage'
import React from 'react'


export const metadata = {
  title: 'Services - WNCH Hub',
  description: 'Services provided by WNCH Hub for towing and dispatch.',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <ServicePage />
    </div>
  )
}

export default page
