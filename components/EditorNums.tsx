interface EditorNumsProps{
    code: string;
    activeNum: number
}
export default function EditorNums(props: EditorNumsProps) {
  const {activeNum, code} = props
  return (
    <div className=''>
        {code?.split("\n").map((_, idx)=>{
            return <div 
            key={idx}
            className={`font-bold text-base h-6 flex  items-center justify-center text-white-transparent-80
            ${activeNum==idx?'text-blue-400':''}`}>{idx+1}</div>
        })}
    </div>
  )
}
