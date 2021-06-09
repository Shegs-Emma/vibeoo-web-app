import axios from 'axios';

type confirmationMailProps = {
    recipient: string,
    recipientUsername: string,
    recipientPassword: string,
}

const requestForSignupConfirmationLink = async ({
  recipient,
  recipientUsername,
  recipientPassword,
}:confirmationMailProps) => {
  const response = await axios({
    method: 'post',
    url: '/api/nodemailer/send-signup-link',
    data: {
      email: recipient,
      username: recipientUsername,
      password: recipientPassword,
    },
  });
  //   console.log('resp-pend-reg', response);
  if (response.data.error) {
    throw new Error(response.data.errorMessage);
  }
  return response.status;
};

export default requestForSignupConfirmationLink;
