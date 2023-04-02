import FileBrowser from "./FileBrowser";
import Menu from "./Menu";
import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <div className='flex flex-col h-full sticky left-0 top-0 w-full bg-[#333333]/90
    backdrop-blur-xl'>
        <Navigation/>
        <Menu/>
      <div className="overflow-auto">
        <FileBrowser/>
      </div>
    </div>
  )
}
