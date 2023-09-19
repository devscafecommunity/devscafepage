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


import React from "react"

// Component list
const components = {
    "title": (props: any) => {
        return React.createElement("h1", null, props.content)
    }, 
    "content": (props: any) => {
        return React.createElement("p", null, props.content)
    },
    "image": (props: any) => {
        return React.createElement("img", {src: props.content})
    },
    "link": (props: any) => {
        return React.createElement("a", {href: props.content}, props.content)
    },
}      