"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { BUTTON_MOTION } from "@/lib/motion/button";
import { cn } from "@/lib/utils/cn";

type Field = "firstName" | "lastName" | "email" | "company" | "message";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  function validate(): boolean {
    const next: Partial<Record<Field, string>> = {};
    if (!values.firstName.trim()) next.firstName = "Required";
    if (!values.lastName.trim()) next.lastName = "Required";
    if (!values.email.trim()) next.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email";
    if (!values.company.trim()) next.company = "Required";
    if (!values.message.trim()) next.message = "Required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="text-sm font-medium text-slate-900">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            value={values.firstName}
            onChange={(e) => setValues((v) => ({ ...v, firstName: e.target.value }))}
            className={cn(
              "mt-2 w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10",
              errors.firstName ? "border-red-300" : "border-slate-200",
            )}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName ? (
            <p id="firstName-error" className="mt-1 text-xs text-red-700">
              {errors.firstName}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="lastName" className="text-sm font-medium text-slate-900">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            value={values.lastName}
            onChange={(e) => setValues((v) => ({ ...v, lastName: e.target.value }))}
            className={cn(
              "mt-2 w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10",
              errors.lastName ? "border-red-300" : "border-slate-200",
            )}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
          {errors.lastName ? (
            <p id="lastName-error" className="mt-1 text-xs text-red-700">
              {errors.lastName}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="text-sm font-medium text-slate-900">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className={cn(
            "mt-2 w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10",
            errors.email ? "border-red-300" : "border-slate-200",
          )}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? (
          <p id="email-error" className="mt-1 text-xs text-red-700">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="mt-5">
        <label htmlFor="company" className="text-sm font-medium text-slate-900">
          Company
        </label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
          className={cn(
            "mt-2 w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10",
            errors.company ? "border-red-300" : "border-slate-200",
          )}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? "company-error" : undefined}
        />
        {errors.company ? (
          <p id="company-error" className="mt-1 text-xs text-red-700">
            {errors.company}
          </p>
        ) : null}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-slate-900">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className={cn(
            "mt-2 w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10",
            errors.message ? "border-red-300" : "border-slate-200",
          )}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-xs text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <motion.button
          type="submit"
          whileHover={BUTTON_MOTION.whileHover}
          whileTap={BUTTON_MOTION.whileTap}
          transition={BUTTON_MOTION.transition}
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Submit inquiry
        </motion.button>
      </div>

      {submitted ? (
        <p className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900" role="status">
          Thanks—your message is validated locally. Connect an API route to deliver it for real submissions.
        </p>
      ) : null}
    </form>
  );
}
