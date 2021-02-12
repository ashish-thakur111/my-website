import React from "react"

import Layout from "../components/hof/layout"
import Head from "../components/head/head"
import formStyles from "./contact.module.scss"

const ContactForm = () => (
  <div>
    <form
      css="max-width: 500px;"
      action="https://formspree.io/f/xeqpwqna"
      method="POST"
    >
      <label className={formStyles.label} htmlFor="name">
        <input
          className={formStyles.input}
          type="text"
          placeholder="Your Name"
          name="name"
        />
      </label>
      <label className={formStyles.label} htmlFor="_replyto">
        <input
          className={formStyles.input}
          type="email"
          placeholder="Your email ... example@domain.com"
          name="_replyto"
        />
      </label>
      <label className={formStyles.label} htmlFor="message">
        <textarea
          className={formStyles.input}
          name="message"
          rows="3"
          placeholder="Your Message"
        />
      </label>
      <input
        type="hidden"
        name="_subject"
        value="Message via http://domain.com"
      />
      <button css="margin-bottom: 32px;" type="submit">
        Submit
      </button>
    </form>
  </div>
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
