import React from "react"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"
import "./contact.scss"

const ContactForm = () => {
  return (
    <>
      <form action="https://formspree.io/f/xeqpwqna" method="post">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea type="text" name="message" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
