import type { ContactContent } from '../../content/types';

export interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  website: string;
}

type ContactField = 'name' | 'email' | 'subject' | 'message';
export type FormErrors = Partial<Record<ContactField, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContactForm(
  values: ContactFormValues,
  content: ContactContent,
): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = content.validation.name;
  if (!emailPattern.test(values.email.trim()) || values.email.length > 254) {
    errors.email = content.validation.email;
  }
  if (!content.subjects.includes(values.subject)) {
    errors.subject = content.validation.subject;
  }
  if (values.message.trim().length < 20) errors.message = content.validation.message;
  return errors;
}

function formString(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === 'string' ? value : '';
}

export function readContactFormValues(form: HTMLFormElement): ContactFormValues {
  const data = new FormData(form);
  return {
    name: formString(data, 'name'),
    email: formString(data, 'email'),
    company: formString(data, 'company'),
    subject: formString(data, 'subject'),
    message: formString(data, 'message'),
    website: formString(data, 'website'),
  };
}
