import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import * as propTypes from "prop-types"

// Import the new rendering and the render node definitions
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import Layout from "../components/hof/layout"
import Head from "../components/head/head"
import blogStyles from "./blog.module.scss"

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

const Bold = ({ children }) => <span className="bold">{children}</span>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderText: text =>
    text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className={blogStyles.para}>{children}</p>
    ),
    [INLINES.ENTRY_HYPERLINK]: ({
      data: {
        target: { slug, title },
      },
    }) => <Link to={slug}>{title}</Link>,
    [BLOCKS.EMBEDDED_ASSET]: node => <Img {...node.data.target} />,
  },
}

// Render richTextResponse.json to the DOM using
// documentToReactComponents from "@contentful/rich-text-react-renderer"
const Blog = props => {
  const title = props.data.contentfulBlogPost.title
  const bodyRichText = props.data.contentfulBlogPost.body
  return (
    <Layout template="true">
      <Head title={title} />
      <div className={blogStyles.container}>
        <header>
          <h1 itemProp="headline" className={blogStyles.head}>
            {title}
          </h1>
          <p className={blogStyles.date}>
            {props.data.contentfulBlogPost.publishedDate}
          </p>
        </header>
        <section itemProp="articleBody" className={blogStyles.section}>
          {bodyRichText && renderRichText(bodyRichText, options)}
        </section>
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
            contentful_id
            __typename
            fixed(width: 500, height: 350) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
