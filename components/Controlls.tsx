"use client"
import classNames from "classnames"

export default function Controlls() {
  return (
    <div className="flex gap-[7px]">
       <ControllButton
        color="#F44336"
        onClick={() => console.log('red')}
      />
      <ControllButton
        color="#FFC107"
        onClick={() => console.log('green')}
      />
      <ControllButton
        color="#4CAF50"
        onClick={() => console.log('blue')}
      />
    </div>
  )
}

function ControllButton(
  props: {
    color: string
    onClick?: () => void
  }
){
  return (
    <button
      className={classNames(
        'h-4 w-4 rounded-full'
      )}
      style={{
        backgroundColor: props.color
      }}
      onClick={props.onClick}
    ></button>
  )
}