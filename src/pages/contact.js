import React from "react"
import { Form, Button, Container } from "react-bootstrap"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"
import formStyles from "./contact.module.scss"

const ContactForm = () => (
  <Layout>
    <Container>
      <Head title="Contact" />
      <Form action="https://formspree.io/f/xeqpwqna" method="post">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" as="input" name="name" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label htmlFor="_replyto">Email address</Form.Label>
          <Form.Control
            type="email"
            as="input"
            name="_replyto"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  </Layout>
)

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
