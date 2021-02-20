import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Card, Button } from "react-bootstrap"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{edge.node.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {edge.node.publishedDate}
                  </Card.Subtitle>
                  <Link to={`/blog/${edge.node.slug}`}>
                    <Button variant="primary">Read more</Button>
                  </Link>
                </Card.Body>
              </Card>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
