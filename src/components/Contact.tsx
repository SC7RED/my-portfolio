import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Reveal } from "./Reveal";
import { site } from "../scripts/site";
import { validateContact } from "../scripts/validate";
import type { ContactErrors, ContactValues } from "../scripts/validate";

const EMPTY: ContactValues = { name: "", email: "", message: "" };

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Honeypot — real visitors never see or fill this field.
    const honeypot = new FormData(event.currentTarget).get("company");
    if (typeof honeypot === "string" && honeypot.length > 0) return;

    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    if (!formspreeId || formspreeId === "your-form-id") {
      setStatus("error");
      setStatusMessage(
        `The form isn't connected to Formspree yet (see README) — meanwhile, email me directly at ${site.email}.`,
      );
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      setStatus("sent");
      setStatusMessage("Thanks — your message is on its way. I'll get back to you soon.");
      setValues(EMPTY);
    } catch {
      setStatus("error");
      setStatusMessage(`Something went wrong sending your message. Try again, or email me at ${site.email}.`);
    }
  };

  return (
    <section id="contact" className="py-[clamp(80px,12vw,140px)]">
      <div className="container-site">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 className="mb-7 text-[clamp(30px,4.4vw,46px)] font-bold tracking-[-0.02em]">
            Send me a message
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} noValidate className="flex max-w-[640px] flex-col gap-5">
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-sm font-medium text-dim">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className="field"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={errors.name ? true : undefined}
                />
                {errors.name && (
                  <p className="text-[13px] text-red-500 dark:text-red-400">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-sm font-medium text-dim">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="field"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={errors.email ? true : undefined}
                />
                {errors.email && (
                  <p className="text-[13px] text-red-500 dark:text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-sm font-medium text-dim">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="What would you like to talk about?"
                className="field resize-y"
                value={values.message}
                onChange={handleChange}
                aria-invalid={errors.message ? true : undefined}
              />
              {errors.message && (
                <p className="text-[13px] text-red-500 dark:text-red-400">{errors.message}</p>
              )}
            </div>

            <div>
              <button type="submit" className="btn" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </div>

            {(status === "sent" || status === "error") && (
              <p
                role="status"
                className={
                  status === "sent"
                    ? "text-sm text-dim"
                    : "text-sm text-red-500 dark:text-red-400"
                }
              >
                {statusMessage}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
