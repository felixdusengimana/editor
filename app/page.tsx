"use client"

import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TextEditor from '@/components/TextEditor'

export default function Home() {
  const onChange = (action: any, data: any) => {
    switch (action) {
      case "code": {
        console.log('Well well')
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  return (
      <div className="flex flex-col justify-between h-full bg-[#222222]">
        <Navbar/>
        <section role="contentinfo" className="flex-grow overflow-x-auto">
          <TextEditor 
          onChange={onChange} language={'javascript'} code={''} theme={'blackboard'}/>
        </section>
        <Footer/>
    </div>
  )
}
