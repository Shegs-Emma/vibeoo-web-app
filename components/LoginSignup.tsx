import { signIn } from 'next-auth/client';
import { Formik } from 'formik';
import Typography from '@material-ui/core/Typography';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { StyledButton } from '../styles/Global.styled';
import {
  LoginSignupContainer, LoginSignupTitle, LoginSignupFormContainer, LoginSignupInputField,
  LoginSignupDivider, SocialSignupBtn,
} from '../styles/LoginSignup.styled';
import { loginSchema, signupSchema } from '../utils/form/yup-schemas';
import { loginUser, registerPendingUser } from '../lib/api/user-api-helpers';
import requestForSignupConfirmationLink from '../lib/api/mailing-api';

type LoginSignupProp = {
    type: 'login' | 'signup'
}

const LoginSignup = ({ type }: LoginSignupProp) => {
  // const initialValuesLogin:
  //   {email: string, password: string} = { email: '', password: '' };
  const initialValues:
    {username: string, email: string, password: string} = { username: '', email: '', password: '' };
  return (
    <LoginSignupContainer>
      <LoginSignupTitle variant="h5" component="p">{type === 'login' ? 'Login' : 'Sign up'}</LoginSignupTitle>
      <Formik
        validationSchema={type === 'login' ? loginSchema : signupSchema}
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
          setSubmitting(true);
          if (type === 'login') {
            try {
              const { _id } = await loginUser(values);
              // console.log('login page', userId);
              signIn('credentials',
                { email: values.email, id: _id, callbackUrl: 'http://localhost:3000/listen' });
            } catch (err) {
              console.log('login', err);
              setSubmitting(false);
              setFieldError('password', err.message);
            }
          } else {
            try {
              setSubmitting(false);
              await requestForSignupConfirmationLink({
                recipient: values.email,
                recipientUsername: values.username,
                recipientPassword: values.password,
              });
            } catch (err) {
              console.log('signup', err);
              setSubmitting(false);
              setFieldError('password', err.message);
            }
          }
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
          isSubmitting,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <LoginSignupFormContainer>
              {type === 'signup'
                  && (
                  <LoginSignupInputField
                    type="text"
                    id="user-username"
                    label="username"
                    variant="filled"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!(touched.username && errors.username)}
                    helperText={errors.username}
                  />
                  )}
              <LoginSignupInputField
                type="email"
                id="user-email"
                label="Email"
                variant="filled"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!(touched.email && errors.email)}
                helperText={errors.email}
              />
              <LoginSignupInputField
                type="password"
                id="user-password"
                label="Password"
                variant="filled"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!(touched.password && errors.password)}
                helperText={errors.password}
              />
              <Typography>Forgot password?</Typography>
              <StyledButton
                disabled={isSubmitting}
                type="submit"
              >
                {type === 'login' ? 'Login' : 'Sign up'}

              </StyledButton>
              {/* <SocialSignupBtn
                aria-controls="twitter sign-up button"
                aria-haspopup="false"
                variant="contained"
                startIcon={<ArrowRightIcon />}
                socialMedia="twitter"
              >
                Sign up with Twitter

              </SocialSignupBtn> */}
              <SocialSignupBtn
                aria-controls="facebook sign-up button"
                aria-haspopup="false"
                variant="contained"
                startIcon={<ArrowRightIcon />}
                socialMedia="facebook"
                onClick={() => {
                  signIn('facebook', { callbackUrl: 'http://localhost:3000/listen' });
                }}
              >
                Sign up with Facebook

              </SocialSignupBtn>
              <SocialSignupBtn
                aria-controls="gmail sign-up button"
                aria-haspopup="false"
                variant="contained"
                startIcon={<ArrowRightIcon />}
                socialMedia="gmail"
                onClick={() => {
                  signIn('google', { callbackUrl: 'http://localhost:3000/listen' });
                }}
              >
                Sign up with Gmail

              </SocialSignupBtn>
            </LoginSignupFormContainer>
          </form>
        )}
      </Formik>
      {/* <LoginSignupDivider variant="body2" component="p">or</LoginSignupDivider> */}
    </LoginSignupContainer>
  );
};

export default LoginSignup;
