import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import * as propTypes from "prop-types"

// Import the new rendering and the render node definitions
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import Layout from "../components/hof/layout"
import Head from "../components/head/head"

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

const options = {
  renderNode: {
    [INLINES.ENTRY_HYPERLINK]: ({
      data: {
        target: { slug, title },
      },
    }) => <Link to={slug}>{title}</Link>,
    [BLOCKS.EMBEDDED_ASSET]: node => <Img {...node.data.target} />,
  },
}
const Blog = props => {
  const title = props.data.contentfulBlogPost.title
  const body = props.data.contentfulBlogPost.body
  return (
    <Layout template="true">
      <Head title={title} />
      <div>
        <h1>{title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        {/* use in case of markdown */}
        {/* <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      /> */}
        {/* Render the Rich Text field data: */}
        {body && renderRichText(body, options)}
      </div>
    </Layout>
  )
}

Blog.propTypes = {
  data: propTypes.object.isRequired,
}

export default Blog

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          contentful_id
          __typename
          ... on ContentfulAsset {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
