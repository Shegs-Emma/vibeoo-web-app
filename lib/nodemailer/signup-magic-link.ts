import nodemailerTransport from './create-transport';

type confirmationMailProps = {
  recipient: string;
  recipientUsername: string;
  token: string;
};

const sendSignupConfirmationLink = async ({
  recipient,
  recipientUsername,
  token,
}: confirmationMailProps) => {
  try {
    await nodemailerTransport.sendMail({
      from: process.env.NEXTAUTH_EMAIL_FROM,
      to: recipient,
      subject: 'Sign in to vibeoo.com - Radio On Demand',
      text: `Sign in to vibeoo.com - vibeoo.com Sign in as ${recipient}`,
      html: `<div>
                          <p>Hi, ${recipientUsername}</p>
                          <p style="color: blue">I will try to send you a confirmation link. Thanks</p>
                          <p>Click 
                              <a 
                      href=${process.env.NEXT_PUBLIC_VERCEL_URL}/account/login?e=${recipient}&t=${token} 
                              target="_blank">here</a> to activate your account</p>
                      </div>`,
    });
    console.log('sendtransport ran');
  } catch (err) {
    console.log('nodemailer-transport', err);
  }
};

export default sendSignupConfirmationLink;
