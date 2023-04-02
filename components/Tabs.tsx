"use client"
import { ReactNode, useState } from "react"

interface TabsProps{
    children: ReactNode[],
    handleChangeActiveTab?: (activeTab: number)=>void
}
export default function Tabs(props:TabsProps) {
  const {children, handleChangeActiveTab} = props    
  return (
    <div className="flex flex-row">
        {
            children?.map((child, index) => {
                return (
                    <div onClick={()=>handleChangeActiveTab&&handleChangeActiveTab(index)} key={index}>
                        {child}
                    </div>
                )
            })
        }
    </div>
  )
}
