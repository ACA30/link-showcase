import Image from "next/image"
import React from "react"

const Button: React.FC<{
  brand?: string
  url?: string
  children?: React.ReactNode
}> = (props) => {
  const brandClass = `rounded-lg py-3 px-20 flex items-center gap-2 justify-center button button-${
    props.brand ?? "default"
  }`

  const brandIcon = `/icons/${props.brand ?? "nate"}.svg`

  return (
    <a
      className={brandClass}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image className="icon" src={brandIcon} alt="" width={24} height={24} />
      {props.children}
    </a>
  )
}

export default Button
