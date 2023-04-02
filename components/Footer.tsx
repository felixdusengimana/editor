import { Git } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-white-transparent-5 flex items-center justify-end px-4">
      <div className="flex gap-4 h-full items-center text-white-transparent-40 py-1">
        <p className="uppercase leading-[14px] text-xs font-medium">LF</p>
        <p className="leading-[14px] text-xs font-medium">Line 5:36</p>
        <p className="uppercase text-white-transparent-40 leading-[14px] text-xs font-medium">UTF8</p>
        <p className="text-white-transparent-40 leading-[14px] text-xs font-medium">2 spaces</p>
        <div className="flex">
          <Git size={12}/> 
          <p className="leading-[14px] text-xs font-medium">main</p>
        </div>
      </div>
    </footer>
  )
}
