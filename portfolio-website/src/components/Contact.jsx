import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {

    e.preventDefault()

    emailjs.sendForm(
      'service_z252cqw',
      'template_aewobde',
      form.current,
      '2wfwJYsOw5nHX736W'
    )

    .then(() => {

      alert('Message Sent Successfully')

      form.current.reset()

    })

    .catch(() => {

      alert('Failed To Send Message')

    })

  }

  return (

    <section id="contact" className="section">

      <h1 className="section-title">
        Contact Me
      </h1>

      <p className="contact-sub">
        Have a project or opportunity?
        Feel free to send me a message.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit" className="btn">
          Send Message
        </button>

      </form>

    </section>

  )
}

export default Contact