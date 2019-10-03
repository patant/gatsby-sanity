import React from "react"
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import SanityComponents from '../components/sanityComponents'

const serializers = {
  types: {
    button: props => {
      return <SanityComponents componentProps={props.node}/>
    },
    contentWrapper: props => {
      return (
        <div style={{backgroundColor: 'pink'}}>
          <BlockContent blocks={props.node.content} serializers={serializers} />
        </div>
      )
    }
  }
}

export default ({ data }) =>
  <div>
    <div>
      <BlockContent blocks={data.sanityPage._rawContent} serializers={serializers} />
    </div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>


export const query = graphql`
  query blockContent {
    sanityPage(slug: {current: {eq: "index"}}) {
      slug {
        current
      }
      _rawContent(resolveReferences: {maxDepth: 10})
    }
  }
`