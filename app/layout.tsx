import Sidebar from '@/components/Sidebar'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       <div className='flex flex-row h-screen  bg-slate-600 bg-wallpaper bg-no-repeat bg-cover'>
          <aside aria-label='Sidebar' className='lg:min-w-[248px] lg:max-w-[248px]'>
              <Sidebar/>
            </aside>
            <main className='flex-grow'>{children}</main>
       </div>
      </body>
    </html>
  )
}
