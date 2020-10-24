import React, { FC } from "react"
import { Tag } from "./styles"

interface TagProps {
  label: string
  dark?: boolean
  onClicked(label: string): any
}

export const Category: FC<TagProps> = ({ label, dark, onClicked }) => {
  return (
    <>
      <Tag onClick={() => onClicked(label)} dark={dark} spaced={true}>
        {label}
      </Tag>
    </>
  )
}
