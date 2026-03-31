import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import ContactFormEmail from '@/emails/contact-form';

// Verificar que la API key existe
const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.error('RESEND_API_KEY no está configurada');
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    // Verificar que las variables de entorno están configuradas
    if (!resend) {
      console.error('Resend no está configurado correctamente');
      return NextResponse.json(
        { error: 'Servicio de email no disponible' },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error('CONTACT_EMAIL no está configurado');
      return NextResponse.json(
        { error: 'Configuración de email incompleta' },
        { status: 500 }
      );
    }

    const { name, email, message } = await request.json();

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Renderizar el template de email
    const emailHtml = await render(
      ContactFormEmail({
        name,
        email,
        message,
      })
    );

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Dominio verificado de Resend
      to: [process.env.CONTACT_EMAIL!],
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: emailHtml,
      replyTo: email, // Para poder responder directamente
    });

    if (error) {
      console.error('Error de Resend:', error);
      return NextResponse.json(
        { error: 'Error enviando email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
