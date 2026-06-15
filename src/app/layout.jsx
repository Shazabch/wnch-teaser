import { Plus_Jakarta_Sans } from 'next/font/google'
import '../common/style/globals.css'
import Navbar from '@/common/component/navbar/Navbar'
import Footer from '@/common/module/Footer'
import { Providers } from '@/common/component/element/Providers'


const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'WNCH Dispatch Hub',
  description: 'The ultimate dispatch platform for towing and roadside assistance.',
  icons: {
    icon: '/Icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Icon.png" sizes="any" />
      </head>
      <body className={`${plus_Jakarta_Sans.className} dark:bg-black`}>
        <Providers>
          <div className='flex justify-center items-center'>
            <Navbar />
          </div>
          {children}
          <div className='flex justify-center items-center'>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
