import React from 'react'

function Button({children, className, isPrimary = true}) {
  return (
    <>
      <button className={isPrimary ? ['h-[52px] w-[210px] bg-black text-white rounded-full', className].join(" "): 
        ['h-[52px] w-[218px] bg-[#0000000A] border-2 rounded-[62px]', className].join(" ")}>{children}</button>
    </>
  )
}

export default Button
