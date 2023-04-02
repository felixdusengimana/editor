import { File } from "./icons";

export default function OpenFiles() {
  const openFiles =[
    {
      name: "index.tsx",
      path: "C:\\Users\\user\\Desktop\\index.tsx"
    },
    {
      name: "index.tsx",
      path: "C:\\Users\\user\\Desktop\\index.tsx"
    },
    {
      name: "index.tsx",
      path: "C:\\Users\\user\\Desktop\\index.tsx"
    },
  ]
  return (
    <div className="flex">
      {
        openFiles?.map((file, index) => {
          return (
            <div key={index} className="flex flex-row items-center h-8 gap-1 py-[6px] px-4 first:bg-white-transparent-10 justify-center text-white-transparent-80">
              <File size={20} fileExtension=""/>
              <span className="font-medium text-sm leading-4">{file.name}</span>
            </div>
          )
        })
      }
    </div>
  )
}
