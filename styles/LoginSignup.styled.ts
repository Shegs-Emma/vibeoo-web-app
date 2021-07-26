import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { StyledFormInput, ButtonWithIcon } from './Global.styled';

const socialBtnColor = (socialMedia: string) => {
  switch (socialMedia) {
    case 'twitter':
      return 'rgba(64, 123, 255, 0.6)';
    case 'facebook':
      return '#407BFF';
    default:
      return 'rgba(255, 0, 0, 0.1)';
  }
};

const LoginSignupContainer = styled.div`
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
`;

const LoginSignupTitle = styled(Typography)<{component: 'p'}>`
    text-align: center;
    margin-bottom: 2rem;
`;
const LoginSignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .MuiTypography-body1 {
    margin-right: auto;
    font-size: 0.8rem;
  }
`;
const LoginSignupInputField = styled(StyledFormInput)`
    margin-bottom: 1rem;
    width: 100%;
    
    @media screen and (min-width: 52em) {
      &>.MuiFilledInput-root {
        background-color: #fff;
        border: 1px solid #757575;
      }
    }
`;

const SocialSignupBtn = styled(ButtonWithIcon)<{socialMedia: string}>`
  background-color: ${(props) => socialBtnColor(props.socialMedia)};
  width: 100%;
  color: ${(props) => (props.socialMedia === 'facebook' ? 'white' : 'black')};
  margin-bottom: 0.5rem;

  &:hover {
    background-color: ${(props) => socialBtnColor(props.socialMedia)};
  }
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

const Divider = styled.div`
width: 100%;
display: flex;
flex-flow: row nowrap;
align-items: center;
margin: 1.5rem 0;
`;

const HrLine = styled.hr`
width: 100%;
border: none;
border-top: 1px solid #757575;
`;

const TextDisplay = styled.p`
  margin: 0 0.35rem;
`;

const H3 = styled.p``;

const SpanText = styled.span<{social?: boolean}>`
  flex-basis: ${({ social }) => (social ? '75%' : '')};
  text-align: ${({ social }) => (social ? 'left' : '')};
  font-weight: bold;
`;

export {
  LoginSignupContainer, LoginSignupTitle, LoginSignupFormContainer, LoginSignupInputField,
  LoginSignupDivider, SocialSignupBtn, Divider, HrLine, TextDisplay, H3, SpanText,
};
