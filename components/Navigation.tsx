import Controlls from "./Controlls";

export default function Navigation() {
  return (
    <div className="flex items-center space-x-4 py-4  px-6">
      <Controlls/>
      <h1 className="text-white-transparent-40 font-bold leading-5 text-base">Editor</h1>
    </div>
  )
}
