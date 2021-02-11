import React, { useState, useEffect } from 'react'

// dependencies
import marked from 'marked'
// files
import readmePath from './README.md'

const Readme = () => {

  const [text, setText] = useState(null)
  
  const getMarkdownText = () => {
    var rawMarkup = marked(text, {sanitize: true});
    return { __html: rawMarkup };
  }

  useEffect(() => {
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        setText(text)
      })
  }, [])

  return <>
    { text && <div dangerouslySetInnerHTML={getMarkdownText()} /> }
  </>
}

export default Readme