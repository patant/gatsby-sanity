import React from "react"
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import loadable from '@loadable/component'
import SanityComponents from '../components/sanityComponents'

const serializers = {
  types: {
    button: props => {
      return <SanityComponents componentProps={props.node}/>
    }
  }
}

export default ({ data }) =>
  <div>
    <div>
      <h4>example</h4>
      <BlockContent blocks={data.sanityPage._rawContent} serializers={serializers} />
    </div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>


export const query = graphql`
  query blockContent {
    sanityPage(slug: {current: {eq: "secondpage"}}) {
      slug {
        current
      }
      _rawContent(resolveReferences: {maxDepth: 10})
    }
  }
`