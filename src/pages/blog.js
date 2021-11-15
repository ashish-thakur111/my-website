import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"
import CardItem from "../components/cardItem/cardItem"
import cardStyles from "../components/cardItem/cardItem.module.scss"
import blogStyles from "./blog.module.scss";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            description
            blogPic {
              title
              file {
                url
              }
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
          <a href="https://ashish-thakur07.github.io" style={{
            textDecoration: "none",
            color: "dark blue"
          }}><span>Take me to techincal blog!</span></a>
        </h3>
      </div>
      <div className={cardStyles.cardsContainer}>
        <div className={cardStyles.cardsContainer}>
          <ul className={cardStyles.cardsItems}>
            {data.allContentfulBlogPost.edges.map(edge => {
              return (
                <CardItem
                  src={edge.node.blogPic.file.url}
                  key={edge.node.slug}
                  text={edge.node.description}
                  label={edge.node.blogPic.title}
                  path={`/blog/${edge.node.slug}`}
                  date={edge.node.publishedDate}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
