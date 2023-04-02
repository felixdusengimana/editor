import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TextEditor from '@/components/TextEditor'

export default function Home() {
  return (
      <div className="flex flex-col justify-between h-full bg-[#222222]">
        <Navbar/>
        <section role="contentinfo" className="flex-grow overflow-x-auto">
          <TextEditor/>
        </section>
        <Footer/>
    </div>
  )
}
