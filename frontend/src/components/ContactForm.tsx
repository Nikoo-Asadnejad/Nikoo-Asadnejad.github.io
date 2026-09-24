"use client";

import type { FormEvent } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { profile } from "@/content/portfolio";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = `Hello Nikoo,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          Your name
          <input name="name" autoComplete="name" required maxLength={80} placeholder="Jane Smith" />
        </label>
        <label>
          Your email
          <input name="email" type="email" autoComplete="email" required maxLength={120} placeholder="jane@example.com" />
        </label>
      </div>
      <label>
        Subject
        <input name="subject" required maxLength={120} placeholder="Engineering opportunity" />
      </label>
      <label>
        Message
        <textarea name="message" required minLength={20} maxLength={2000} rows={7} placeholder="Tell me about the role, project, or idea..." />
      </label>
      <p className="form-note" id="email-note">Submitting opens your email application with this message prepared. Nothing is stored by this website.</p>
      <button className="button" type="submit" aria-describedby="email-note">
        Open email message <FiArrowUpRight aria-hidden="true" />
      </button>
    </form>
  );
}

