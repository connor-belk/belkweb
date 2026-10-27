"use client";

import { useState } from "react";
import { CONTACT_LIMITS } from "../contact-fields";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setPending(true);
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("Your message has been sent.");
    } catch {
      setStatus("Could not send your message. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex flex-col items-center my-auto mx-auto">
      <h2 className="mb-10 text-4xl font-bold">Contact Me</h2>
      <form
        onSubmit={handleContactSubmit}
        className="flex flex-col items-center text-2xl gap-4 max-w-[600px]"
      >
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            maxLength={CONTACT_LIMITS.name}
            className="px-4 py-2 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 bg-slate-500/50 text-slate-200 border-none w-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            maxLength={CONTACT_LIMITS.email}
            className="px-4 py-2 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 bg-slate-500/50 text-slate-200 border-none w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <label htmlFor="subject">Subject</label>
          <select
            name="subject"
            id="subject"
            required
            className="px-4 py-2 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 bg-slate-500/50 text-slate-200 border-none w-full"
          >
            <option value="" className="text-black">
              Select a Subject
            </option>
            <option value="website-design" className="text-black">
              Web Design
            </option>
            <option value="SEO" className="text-black">
              SEO
            </option>
            <option value="Management" className="text-black">
              Management
            </option>
          </select>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            rows={5}
            required
            maxLength={CONTACT_LIMITS.message}
            className="px-4 py-2 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 bg-slate-500/50 text-slate-200 border-none w-full resize-none text-lg"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="px-10 py-3 w-full rounded-xl bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
        >
          {pending ? "Sending..." : "Send"}
        </button>
        <p role="status" aria-live="polite">
          {status}
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
