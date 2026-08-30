"use client";

import { useState } from "react";
import { useForm, type UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { fadeUp } from "@/lib/motion";
import { useRevealProps } from "@/lib/useReveal";
import { countryDialCodes, leadFormSteps } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonEl } from "@/components/ui/Button";

const schema = z.object({
  study: z.string().min(1, "Please pick an option"),
  country: z.string().min(1, "Please pick an option"),
  qualification: z.string().min(1, "Please pick an option"),
  testScore: z.string().min(1, "Please pick an option"),
  budget: z.string().min(1, "Please pick an option"),
  dialCode: z.string().min(1),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(15, "Enter a valid phone number")
    .regex(/^[0-9\s-]+$/, "Digits only"),
  // honeypot — must stay empty
  company: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

const fieldOrder: (keyof FormValues)[] = [
  "study",
  "country",
  "qualification",
  "testScore",
  "budget",
  "phone",
];

export function LeadForm({ id = "assessment" }: { id?: string }) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const reveal = useRevealProps();

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { dialCode: "+91" },
  });

  const totalSteps = leadFormSteps.length + 1;
  const isLast = step === totalSteps - 1;

  async function next() {
    const ok = await trigger(fieldOrder[step]);
    if (ok) setStep((s) => Math.min(s + 1, totalSteps - 1));
  }

  async function onSubmit(values: FormValues) {
    setStatus("submitting");
    // Simulated submit — wire to your CRM / API route here.
    await new Promise((r) => setTimeout(r, 1100));
    // eslint-disable-next-line no-console
    console.info("Lead captured", values);
    setStatus("success");
  }

  return (
    <Section id={id} tone="white" pattern>
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          align="left"
          eyebrow="Free Assessment"
          title="Not Sure Where You Fit? Let's Find Out."
          intro="Answer six quick questions and an advisor will come back with a shortlist of countries, courses, and next steps — no cost, no obligation."
        />

        <motion.div
          variants={fadeUp}
          {...reveal}
          className="rounded-3xl border border-brand-600/15 bg-brand-50 p-6 shadow-card sm:p-8"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Check className="h-7 w-7" />
              </span>
              <h3 className="text-xl font-bold text-navy-900">Thank you — we&apos;ve got it.</h3>
              <p className="max-w-sm text-sm text-ink">
                An advisor will call you on the number you shared, usually within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white">
                  <motion.div
                    className="h-full rounded-full bg-brand-600"
                    animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="text-xs font-semibold text-ink">
                  {step + 1}/{totalSteps}
                </span>
              </div>

              {/* honeypot */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
                aria-hidden
                {...register("company")}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {step < leadFormSteps.length ? (
                    <SelectStep
                      index={step}
                      register={register}
                      error={errors[fieldOrder[step]]?.message}
                    />
                  ) : (
                    <fieldset className="flex flex-col gap-2">
                      <legend className="mb-2 flex items-center gap-2 text-sm font-semibold text-navy-900">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                          6
                        </span>
                        Phone Number
                      </legend>
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
                          placeholder="98765 43210"
                          className="flex-1 rounded-lg border border-hair bg-white px-3 py-3 text-sm text-navy-900 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
                          {...register("phone")}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs font-medium text-red-600">{errors.phone.message}</p>
                      )}
                      <p className="mt-1 text-xs text-ink">
                        We use your number only to share your assessment. No spam.
                      </p>
                    </fieldset>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-7 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(s - 1, 0))}
                  className={cn(
                    "inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition hover:text-brand-600",
                    step === 0 && "pointer-events-none opacity-0",
                  )}
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>

                {isLast ? (
                  <ButtonEl type="submit" size="lg" disabled={status === "submitting"}>
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Get My Assessment <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </ButtonEl>
                ) : (
                  <ButtonEl type="button" size="lg" onClick={next}>
                    Next <ArrowRight className="h-4 w-4" />
                  </ButtonEl>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}

function SelectStep({
  index,
  register,
  error,
}: {
  index: number;
  register: UseFormRegister<FormValues>;
  error?: string;
}) {
  const stepDef = leadFormSteps[index];
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-2 flex items-center gap-2 text-sm font-semibold text-navy-900">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
          {index + 1}
        </span>
        {stepDef.question}
      </legend>
      <select
        aria-label={stepDef.question}
        defaultValue=""
        className="rounded-lg border border-hair bg-white px-3 py-3 text-sm text-navy-900 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
        {...register(stepDef.name)}
      >
        <option value="" disabled>
          Select an option
        </option>
        {stepDef.options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="text-xs font-medium text-red-600">{error}</p>}
    </fieldset>
  );
}
