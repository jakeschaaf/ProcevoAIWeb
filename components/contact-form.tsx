'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { contactSchema } from '@/lib/contact-schema';
import type { ContactFormData } from '@/lib/contact-schema';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'Something went wrong');
      }

      setSubmitState('success');
      reset();
    } catch (error) {
      setSubmitState('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong',
      );
    }
  };

  if (submitState === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-500/10 border border-accent-500/30 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-accent-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-100 mb-2">
          Message Sent
        </h3>
        <p className="text-slate-400">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setSubmitState('idle')}
          className="mt-4 text-accent-500 hover:text-accent-400 font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <input
        type="text"
        {...register('website')}
        className="absolute -left-[9999px]"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-300 mb-1.5"
        >
          Email <span className="text-accent-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border ${
            errors.email ? 'border-red-500' : 'border-slate-700'
          } text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all duration-300`}
          placeholder="you@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-300 mb-1.5"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all duration-300"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-slate-300 mb-1.5"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          {...register('company')}
          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all duration-300"
          placeholder="Your company"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-300 mb-1.5"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all duration-300"
          placeholder="Your phone number"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-300 mb-1.5"
        >
          How can we help? <span className="text-accent-500">*</span>
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={4}
          className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border ${
            errors.message ? 'border-red-500' : 'border-slate-700'
          } text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all duration-300 resize-none`}
          placeholder="Tell us briefly about your situation..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      {submitState === 'error' && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
          <p className="text-sm text-red-400">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitState === 'submitting'}
        className="w-full py-4 px-6 bg-accent-500 hover:bg-accent-400 disabled:bg-slate-700 text-slate-950 disabled:text-slate-400 font-medium rounded-full transition-all duration-300 shadow-lg shadow-accent-500/20 hover:shadow-accent-400/30 disabled:shadow-none disabled:cursor-not-allowed"
      >
        {submitState === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
