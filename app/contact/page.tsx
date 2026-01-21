"use client";

import { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, subject, message);
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
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-xl focus:outline-none active:outline-none bg-slate-500/50 text-slate-200 border-none w-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="px-4 py-2 rounded-xl focus:outline-none active:outline-none bg-slate-500/50 text-slate-200 border-none"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <label htmlFor="subject">Subject</label>
          <select
            name="subject"
            id="subject"
            required
            className="px-4 py-2 rounded-xl focus:outline-none active:outline-none bg-slate-500/50 text-slate-200 border-none w-full"
          >
            <option value="none" className="text-black">
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
            className="px-4 py-2 rounded-xl focus:outline-none active:outline-none bg-slate-500/50 text-slate-200 border-none w-full resize-none text-lg"
          />
        </div>
        <button
          type="submit"
          className="px-10 py-3 w-full rounded-xl bg-green-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
