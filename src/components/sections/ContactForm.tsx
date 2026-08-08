import { useEffect, useRef, useState, type FormEvent } from 'react';

import type { ContactContent } from '../../content/types';
import type { Locale } from '../../lib/locale';
import { trackEvent } from '../../lib/analytics';
import { readContactFormValues, validateContactForm, type FormErrors } from './contact-form-validation';
type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'configuration-error';

export function ContactForm({ content, locale }: { content: ContactContent; locale: Locale }) {
  const startedAt = useRef<number | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = readContactFormValues(form);
    const nextErrors = validateContactForm(values, content);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      const firstInvalidField = Object.keys(nextErrors)[0];
      const control = firstInvalidField ? form.elements.namedItem(firstInvalidField) : null;
      if (control instanceof HTMLElement) control.focus();
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ ...values, locale, startedAt: startedAt.current ?? Date.now() - 1_500 }),
      });
      const result: unknown = await response.json();
      const code = typeof result === 'object' && result !== null && 'code' in result && typeof result.code === 'string'
        ? result.code
        : '';
      if (response.ok) {
        setStatus('success');
        form.reset();
        startedAt.current = Date.now();
        trackEvent('contact_submitted', { locale });
      } else if (code === 'SERVICE_NOT_CONFIGURED') {
        setStatus('configuration-error');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const statusMessage = status === 'success'
    ? content.states.success
    : status === 'configuration-error'
      ? content.states.configurationError
      : status === 'error'
        ? content.states.error
        : '';

  return (
    <form className="contact-form" noValidate onSubmit={(event) => void submit(event)}>
      {Object.keys(errors).length > 0 && (
        <div className="form-summary" role="alert" tabIndex={-1}>
          {content.validation.summary}
        </div>
      )}
      <div className="form-grid">
        <div className="field">
          <label htmlFor="contact-name">{content.labels.name}</label>
          <input id="contact-name" name="name" autoComplete="name" maxLength={100} placeholder={content.placeholders.name} aria-required="true" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />
          {errors.name && <span id="contact-name-error" className="field-error">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="contact-email">{content.labels.email}</label>
          <input id="contact-email" name="email" type="email" inputMode="email" autoComplete="email" maxLength={254} placeholder={content.placeholders.email} aria-required="true" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} />
          {errors.email && <span id="contact-email-error" className="field-error">{errors.email}</span>}
        </div>
        <div className="field">
          <label htmlFor="contact-company">{content.labels.company}</label>
          <input id="contact-company" name="company" autoComplete="organization" maxLength={120} placeholder={content.placeholders.company} />
        </div>
        <div className="field">
          <label htmlFor="contact-subject">{content.labels.subject}</label>
          <select id="contact-subject" name="subject" defaultValue="" aria-required="true" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'contact-subject-error' : undefined}>
            <option value="" disabled>—</option>
            {content.subjects.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
          </select>
          {errors.subject && <span id="contact-subject-error" className="field-error">{errors.subject}</span>}
        </div>
        <div className="field field--message">
          <label htmlFor="contact-message">{content.labels.message}</label>
          <textarea id="contact-message" name="message" rows={6} minLength={20} maxLength={4000} placeholder={content.placeholders.message} aria-required="true" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />
          {errors.message && <span id="contact-message-error" className="field-error">{errors.message}</span>}
        </div>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="form-consent">{content.consent}</p>
      <div className="form-submit-row">
        <button className="button button--primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? content.states.sending : content.states.idle}
        </button>
        {statusMessage && <p className={`form-status form-status--${status}`} role="status" aria-live="polite">{statusMessage}</p>}
      </div>
    </form>
  );
}
