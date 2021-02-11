import React from 'react'

export const Card = ({ children, cssClass, title }) => {
  return (
    <div className={`card ${cssClass ? cssClass : null}`}>
      { title && <div className="card-header"><span className="h3">{title}</span></div> }
      {children}
    </div>
  )
}
export const Ul = ({ children }) => {
  return ( <ul className="list-group list-group-flush">{children}</ul> )
}
export const Li = ({ children }) => {
  return ( <li className="list-group-item">{children}</li> )
}