export default {
  title: 'ContentWrapper',
  name: 'contentWrapper',
  type: 'object',
  fields: [
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        },
        {
          type: 'button',
          name: 'button',
          title: 'button',
        }
      ]
    }
  ]
}