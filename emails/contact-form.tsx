import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormEmail({ 
  name, 
  email, 
  message 
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje de contacto de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nuevo Mensaje de Contacto</Heading>
          
          <Section style={section}>
            <Text style={label}>Nombre:</Text>
            <Text style={value}>{name}</Text>
          </Section>
          
          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
          </Section>
          
          <Hr style={hr} />
          
          <Section style={section}>
            <Text style={label}>Mensaje:</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>
          
          <Hr style={hr} />
          
          <Text style={footer}>
            Este mensaje fue enviado desde tu portfolio web.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Estilos
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
};

const h1 = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0 40px',
};

const section = {
  padding: '0 40px',
  marginBottom: '16px',
};

const label = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
};

const value = {
  color: '#1f2937',
  fontSize: '16px',
  margin: '4px 0 0 0',
  fontWeight: '500',
};

const messageStyle = {
  color: '#1f2937',
  fontSize: '16px',
  margin: '4px 0 0 0',
  lineHeight: '1.6',
  whiteSpace: 'pre-line' as const,
};

const hr = {
  borderColor: '#e2e8f0',
  margin: '20px 40px',
};

const footer = {
  color: '#6b7280',
  fontSize: '12px',
  margin: '0',
  padding: '0 40px',
  textAlign: 'center' as const,
};
