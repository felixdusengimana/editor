import { Folder, Git, Plugins, Search, Settings } from "./icons";

export default function Menu() {
  return (
    <div className="flex space-x-5 text-white-transparent-80  px-6">
        <Folder className="text-primary"/>
        <Git/>
        <Search/>
        <Plugins/>
        <Settings/>
    </div>
  )
}
