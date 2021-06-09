import styled from 'styled-components';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { signupViaEmail } from '../../lib/api/user-api-helpers';

const CreatingAccount = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`

`;

const LogUserInFromVerificationLInk = () => {
  const [loginStatus, setLoginStatus] = useState('Wait while we set up your account ...');
  const router = useRouter();
  useEffect(() => {
    async function checkUser() {
      const { isReady, query } = router;
      if (isReady) {
        if (query.e && query.t) {
          const response = await signupViaEmail({
            email: query.e as string,
            token: query.t as string,
          });
          if (response) {
            signIn('credentials', {
              email: response.email,
              id: response.userId,
              callbackUrl: 'http://localhost:3000/listen',
            });
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
    <CreatingAccount>
      <LogoContainer>
        <Image
          src="/logo_vibeoo.svg"
          alt="vibeoo website logo"
          width={100}
          height={50}
          layout="intrinsic"
        />
      </LogoContainer>
      <p>{loginStatus}</p>
    </CreatingAccount>
  );
};

export default LogUserInFromVerificationLInk;
