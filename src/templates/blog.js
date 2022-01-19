import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"
import * as blogStyles from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = (props) => {
    const title = props.data.markdownRemark.frontmatter.title
    return (
      <Layout template="true">
        <Head title={title} />
        <div className={blogStyles.container}>
          <header>
            <h1 itemProp="headline" className={blogStyles.head}>
              {title}
            </h1>
            <p className={blogStyles.date}>
              {props.data.markdownRemark.frontmatter.date}
            </p>
          </header>
          <section itemProp="articleBody" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}} />
        </div>
      </Layout>
    )
  }

  export default Blog