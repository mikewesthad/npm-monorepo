import React from 'react'

interface CardProps {
  children: React.ReactNode
  title?: string
}

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  )
}