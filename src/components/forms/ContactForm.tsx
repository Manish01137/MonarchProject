"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { fadeUp } from "@/lib/motion";
import { useRevealProps } from "@/lib/useReveal";
import { countryDialCodes } from "@/content/home";
import { countryNav } from "@/content/site";
import { ButtonEl } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  dialCode: z.string().min(1),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(15, "Enter a valid phone number")
    .regex(/^[0-9\s-]+$/, "Digits only"),
  country: z.string().min(1, "Please choose a country"),
  message: z.string().min(10, "A little more detail helps us route your query"),
  company: z.string().max(0).optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

const inputCls =
  "w-full rounded-lg border border-hair bg-white px-3.5 py-3 text-sm text-navy-900 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20";

export function ContactForm() {
  const reveal = useRevealProps();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { dialCode: "+91" },
  });

  async function onSubmit(values: FormValues) {
    await new Promise((r) => setTimeout(r, 1100));
    // eslint-disable-next-line no-console
    console.info("Contact message", values);
    reset({ dialCode: "+91" });
  }

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-hair bg-white p-10 text-center shadow-card">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-bold text-navy-900">Message sent</h3>
        <p className="max-w-sm text-sm text-ink">
          Thanks for reaching out. An advisor will reply to your email shortly.
        </p>
      </div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      variants={fadeUp}
      {...reveal}
      className="flex flex-col gap-4 rounded-3xl border border-hair bg-white p-6 shadow-card sm:p-8"
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        {...register("company")}
      />

      <Field label="Full Name" error={errors.name?.message}>
        <input className={inputCls} placeholder="Your name" {...register("name")} />
      </Field>

      <Field label="Email" error={errors.email?.message}>
        <input
          type="email"
          className={inputCls}
          placeholder="you@example.com"
          {...register("email")}
        />
      </Field>

      <Field label="Phone" error={errors.phone?.message}>
        <div className="flex gap-2">
          <select
            aria-label="Country code"
            className="w-32 rounded-lg border border-hair bg-white px-2 py-3 text-sm text-navy-900 outline-none focus:border-brand-600"
            {...register("dialCode")}
          >
            {countryDialCodes.map((d) => (
              <option key={d.code} value={d.code}>
                {d.label}
              </option>
            ))}
          </select>
          <input
            type="tel"
            inputMode="numeric"
            className={cn(inputCls, "flex-1")}
            placeholder="98765 43210"
            {...register("phone")}
          />
        </div>
      </Field>

      <Field label="Country of Interest" error={errors.country?.message}>
        <select className={inputCls} defaultValue="" {...register("country")}>
          <option value="" disabled>
            Select a country
          </option>
          {countryNav.map((c) => (
            <option key={c.slug} value={c.label}>
              {c.label}
            </option>
          ))}
          <option value="Other / Not sure">Other / Not sure</option>
        </select>
      </Field>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          rows={4}
          className={cn(inputCls, "resize-y")}
          placeholder="Tell us what you're planning…"
          {...register("message")}
        />
      </Field>

      <ButtonEl type="submit" size="lg" className="mt-1 w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          "Send Message"
        )}
      </ButtonEl>
    </motion.form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-navy-900">{label}</span>
      {children}
      {error && <span className="text-xs font-medium text-red-600">{error}</span>}
    </label>
  );
}
