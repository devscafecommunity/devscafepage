/*
{
  header: { title: '"Test"', version: '1', verifed: 'true' }, <- Ignore this
  tags: [
    { tag: 'title', content: 'Test ssssssssssssss' },        
    { tag: 'content', content: 'Test' }
  ]
}

The parser just will match the tags in a list of react components and make a list of them
for rendering. The parser will also parse the header and return it as a separate object.

return as a list of react components

import React from "react"

const Title = (props) => {
  return React.createElement("h1", null, props.content)
}

export default Title
*/ 


import { type } from "os"
import React from "react"

type component = {
    [key: string]: any
}

type header = {
    [key: string]: any
}

type token = {
    tag: string
    content: string
}

type tag = {
    tag: string
    content: string
}

// Component list
const components = [
  {
    tag: "title",
    component: (props: any) => {
      return React.createElement("h1", null, props.content)
    }
  },
  {
    tag: "content",
    component: (props: any) => {
      return React.createElement("p", null, props.content)
    }
  },
  {
    tag: "image",
    component: (props: any) => {
      return React.createElement("img", {src: props.content})
    }
  },
  {
    tag: "link",
    component: (props: any) => {
      return React.createElement("a", {href: props.content, className: `hover:underline hover:text-blue-500 hover:before:content-attr`}, "content link")
    }
  }
]

// Parser
// Parser just take the tag list and make a list of react components
export default function parse(tokens: token[], header: header) {
    let componentsList: component[] = []
    for (let token of tokens) {
        let component = components.find((component) => component.tag === token.tag)
        if (component) {
            componentsList.push({
                component: component.component,
                content: token.content
            })
        }
    }
    return componentsList
}