import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/hof/layout"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const src = node.data.target.fields.title["en-US"].url
        return <img alt={alt} src={src} />
      }
    }
  }

  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {/* use in case of markdown */}
      {/* <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      /> */}
      {documentToReactComponents(
        JSON.parse(props.data.contentfulBlogPost.body.raw), options
      )}
    </Layout>
  )
}

export default Blog
