import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"
import CardItem from "../components/cardItem/cardItem"
import * as cardStyles from "../components/cardItem/cardItem.module.scss"
import * as blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
              blogImage {
                relativePath
              }
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <div className={blogStyles.title}>
        <h2>Blog</h2>
        <h3>
          <a
            href="https://ashish-thakur07.github.io"
            style={{
              textDecoration: "none",
              color: "dark blue",
            }}
          >
            <span>Take me to techincal blog!</span>
          </a>
        </h3>
      </div>
      <div>
        <ul className={cardStyles.cardsItems}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <CardItem
                src={edge.node.frontmatter.blogImage.relativePath}
                key={edge.node.slug}
                text={edge.node.excerpt}
                label={edge.node.frontmatter.title}
                path={`/blog/${edge.node.fields.slug}`}
                date={edge.node.frontmatter.date}
              />
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default BlogPage
