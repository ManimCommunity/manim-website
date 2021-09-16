import React from "react"
import { Link } from "gatsby"

const basicTemplate = props => {
  const { pageContent } = props

  return (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <h1>{pageContent.name}</h1>
    </div>
  )
}
export default basicTemplate