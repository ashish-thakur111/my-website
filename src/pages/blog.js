import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Card, Button, Container } from "react-bootstrap"

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
      <Container>
        <strong>
          <h2>Blog</h2>
        </strong>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className={blogStyles.post}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={edge.node.blogPic.file.url}
                    alt={edge.node.blogPic.title}
                    className={blogStyles.pic}
                  />
                  <Card.Body>
                    <Card.Title>{edge.node.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {edge.node.publishedDate}
                    </Card.Subtitle>
                    <Card.Text>{edge.node.description}</Card.Text>
                    <Link to={`/blog/${edge.node.slug}`}>
                      <Button variant="primary">Read more</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </li>
            )
          })}
        </ol>
      </Container>
    </Layout>
  )
}

export default BlogPage
