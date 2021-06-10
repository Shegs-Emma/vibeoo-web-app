import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { StyledFormInput, ButtonWithIcon } from './Global.styled';

const socialBtnColor = (socialMedia) => {
  switch (socialMedia) {
    case 'twitter':
      return 'blue';
    case 'facebook':
      return 'lightblue';
    default:
      return 'hotpink';
  }
};

const LoginSignupContainer = styled.div`
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
`;

const LoginSignupTitle = styled(Typography)`
    text-align: center;
`;
const LoginSignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoginSignupInputField = styled(StyledFormInput)`
    margin-bottom: 1rem;
`;

const SocialSignupBtn = styled(ButtonWithIcon)`
  background-color: ${(props) => socialBtnColor(props.socialMedia)}
`;

const LoginSignupDivider = styled(Typography)`
    color: black;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, .45);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::before,
  &::after {
    content: '';
    display: block;
    height: 0.09em;
    min-width: 30vw;
  }
`;

export {
  LoginSignupContainer, LoginSignupTitle, LoginSignupFormContainer, LoginSignupInputField,
  LoginSignupDivider, SocialSignupBtn,
};
