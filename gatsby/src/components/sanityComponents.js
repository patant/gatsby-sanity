import React from 'react'
import Button from './button'

export default ({ componentProps }) => {
  switch (componentProps._type) {
    case 'button':
      return <Button text={componentProps.text} />
      break;

    default:
      console.error('no module mapping done in sanityComponents')
      break;
  }
}