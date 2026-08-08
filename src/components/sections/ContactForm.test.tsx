import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { ptBR } from '../../content/pt-BR';
import { ContactForm } from './ContactForm';
import { validateContactForm } from './contact-form-validation';

afterEach(() => vi.restoreAllMocks());

const validSubmission = {
  name: 'Ana Conceição',
  email: 'ana@empresa.com',
  company: 'Empresa',
  subject: ptBR.contact.subjects[0],
  message: 'Olá! Quero conversar sobre uma oportunidade remota para backend Python.',
  website: '',
};

describe('contact validation', () => {
  it('validates every required field without treating company as required', () => {
    expect(
      validateContactForm(
        { ...validSubmission, name: 'A', email: 'invalid', subject: '', message: 'curta' },
        ptBR.contact,
      ),
    ).toEqual({
      name: ptBR.contact.validation.name,
      email: ptBR.contact.validation.email,
      subject: ptBR.contact.validation.subject,
      message: ptBR.contact.validation.message,
    });
  });

  it('accepts a complete valid submission', () => {
    expect(validateContactForm(validSubmission, ptBR.contact)).toEqual({});
  });
});

describe('contact form states', () => {
  it('shows an accessible summary and does not send invalid data', async () => {
    const user = userEvent.setup();
    const fetchSpy = vi.spyOn(window, 'fetch');
    render(<ContactForm content={ptBR.contact} locale="pt-BR" />);

    await user.click(screen.getByRole('button', { name: 'Enviar uma mensagem' }));

    expect(screen.getByRole('alert')).toHaveTextContent(ptBR.contact.validation.summary);
    expect(screen.getByLabelText('Nome')).toHaveFocus();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('shows the real configuration error returned by the endpoint', async () => {
    const user = userEvent.setup();
    const fetchSpy = vi.spyOn(window, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: false, code: 'SERVICE_NOT_CONFIGURED' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      }),
    );
    render(<ContactForm content={ptBR.contact} locale="pt-BR" />);

    await user.type(screen.getByLabelText('Nome'), validSubmission.name);
    await user.type(screen.getByLabelText('E-mail profissional'), validSubmission.email);
    await user.selectOptions(screen.getByLabelText('Assunto'), validSubmission.subject);
    await user.type(screen.getByLabelText('Mensagem'), validSubmission.message);
    await user.click(screen.getByRole('button', { name: 'Enviar uma mensagem' }));

    expect(await screen.findByRole('status')).toHaveTextContent(
      ptBR.contact.states.configurationError,
    );
    const requestInit = fetchSpy.mock.calls[0]?.[1] as RequestInit;
    expect(new Headers(requestInit.headers).get('Content-Type')).toBe(
      'application/json; charset=utf-8',
    );
    expect(typeof requestInit.body).toBe('string');
    const requestBody = JSON.parse(
      typeof requestInit.body === 'string' ? requestInit.body : '',
    ) as Record<string, unknown>;
    expect(requestBody).toMatchObject({
      name: validSubmission.name,
      message: validSubmission.message,
    });
  });
});
