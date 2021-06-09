import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import CustomLink from '../components/CustomLink';

const activePage = () => (
  `background-color: red;
    color: #fff;
        `
);

const StyledButton = styled(Button)`
    background-color: ${(props) => (props.bgcolor === 'light' ? 'fff' : 'Yellow')};
    padding-left: 1.48rem;
    padding-right: 1.48rem;
    border-radius: 50px;
    &:hover {
        background-color: ${(props) => (props.bgcolor === 'light' ? 'fff' : 'Yellow')};
    }
`;

const ButtonWithIcon = styled(Button)`
    border: 1px solid #fff;
    color: #fff;
    background-color: transparent;
    border-radius: 50px;
    min-width: fit-content;
    text-transform: capitalize;

    & .MuiButton-label {
        justify-content: space-between;
    }

    &:hover {
        background-color: transparent;
    }
    
`;
const GlobalDropdownMenu = styled.div`
    display: ${(props) => (props.open ? 'block' : 'none')};
    background-color: red;
    position: absolute;
    z-index: 999;
    min-width: fit-content;
    width: 50%;
    border: 1px solid grey;
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const GlobalDropdownLink = styled(CustomLink)`
    width: 100%;
    text-align: center;
        ${(props) => (props.isActiveContent ? activePage() : '')}
`;

const StyledFormInput = styled(TextField)`
    & .MuiFilledInput-root {
        border-radius: 50px;
    }
    & .MuiFilledInput-underline:before, & .MuiFilledInput-underline:hover:before, 
    & .MuiFilledInput-underline:after {
        border-bottom: 0;
    }
    & .MuiFilledInput-input:-webkit-autofill {
        border-radius: 50px;
    }
`;

export {
  StyledButton, ButtonWithIcon, GlobalDropdownMenu, GlobalDropdownLink, StyledFormInput,
};
