import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { signupViaEmail } from '../../lib/api/user-api-helpers';

const LogUserInFromVerificationLInk = () => {
  const [loginStatus, setLoginStatus] = useState('redirecting...');
  const router = useRouter();
  useEffect(() => {
    async function checkUser() {
      const { isReady, query } = router;
      if (isReady) {
        if (query.e && query.t) {
          const response = await signupViaEmail({ email: query.e as string, token: query.t as string });
          if (response) {
            signIn('credentials',
              { email: response.email, id: response.userId, callbackUrl: 'http://localhost:3000/listen' });
          } else {
            setLoginStatus('Invalid link');
          }
        } else {
          router.replace('http://localhost:3000/');
        }
      }
    }
    checkUser();
  }, [router]);
  return (
    <p>{loginStatus}</p>
  );
};

export default LogUserInFromVerificationLInk;
