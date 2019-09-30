import React from 'react'
import Button from './components/button'

export default {
  name: 'button',
  type: 'object',
  fields: [
    {
      name: 'text',
      type: 'string'
    }
  ],
  preview: {
    select: {
      text: 'text'
    },
    prepare(value) {
      return {
        title: 'button preview',
        extendedPreview: <Button text={value.text} />
      }
    }
  }
}