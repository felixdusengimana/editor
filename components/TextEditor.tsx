"use client"

import React, { useState } from 'react'
import classnames from 'classnames'

const CodeEditor = () => {
  const [code, setCode] = useState('')

  const handleCodeChange = (event) => {
    setCode(event.target.value)
  }

  const highlightCode = (code) => {
    // Define your syntax highlighting rules here
    const keywords = ['if', 'else', 'while', 'for', 'function']
    const operators = ['+', '-', '*', '/', '=', '>', '<', '!', '?', ':']

    // Split the code into tokens
    const tokens = code.split(/(\b|\W)/)

    // Map each token to a span element with a class name based on its type
    const highlightedCode = tokens.map((token, index) => {
      let className = ''

      if (keywords.includes(token)) {
        className = 'text-blue-600 font-bold'
      } else if (operators.includes(token)) {
        className = 'text-green-600 font-bold'
      }

      return (
        <span key={index} className={classnames(className)}>
          {token}
        </span>
      )
    })

    return highlightedCode
  }

  return (
    <div className="h-full">
      <textarea
        value={code}
        onChange={handleCodeChange}
        className=""
        placeholder="Enter your code here..."
      />
      <div className="inset-0 overflow-auto">
        <pre className="p-4">{highlightCode(code)}</pre>
      </div>
    </div>
  )
}

export default CodeEditor
