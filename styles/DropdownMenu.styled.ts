import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import CustomLink, { props as CustomLinkProps } from '../components/CustomLink';
import { ButtonWithIcon, GlobalDropdownMenu } from './Global.styled';

const activePage = () => (
  `background-color: red;
  color: #fff;
      `
);

const ExploreDropdownBtn = styled(ButtonWithIcon)` 
    @media(min-width:943px){
        display: none;
    }
`;

const ExploreDropdownMenu = styled(GlobalDropdownMenu)`
    color: #fff;
    background-color: black;
    padding: 0;
    width: 36.58%;
    border-radius: 4px;

    & .MuiListItem-gutters {
        padding-left: 0;
        padding-right: 0;
    }
`;

const ExploreDropdownLink = styled(CustomLink)`
    width: 100%;
    text-align: center;
        ${(props) => (props.isActiveContent ? activePage() : '')}
`;

export { ExploreDropdownBtn, ExploreDropdownMenu, ExploreDropdownLink };
