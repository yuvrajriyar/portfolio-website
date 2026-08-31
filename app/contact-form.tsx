"use client";

import type { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Portfolio enquiry");
    const message = String(data.get("message") || "");
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:ysriyar30@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label><span>Name</span><input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="Your email" required /></label>
      </div>
      <label><span>Subject</span><input name="subject" type="text" placeholder="What would you like to discuss?" required /></label>
      <label><span>Message</span><textarea name="message" rows={5} placeholder="Write your message here" required /></label>
      <button type="submit">Send message <span aria-hidden="true">↗</span></button>
    </form>
  );
}
