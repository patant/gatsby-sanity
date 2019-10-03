import React from 'react'
import Button from './components/button'

const PreviewComponent = props => {
  console.log('---------------------------------------------------------------------------------', props)
  return <span></span>
}

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        },
        {
          type: 'contentWrapper',
          name: 'contentWrapper',
          title: 'contentWrapper',
        }
      ]
    }
  ]
}