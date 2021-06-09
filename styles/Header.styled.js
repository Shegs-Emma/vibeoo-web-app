import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import { ButtonWithIcon, StyledButton } from './Global.styled';
import { ExploreDropdownMenu } from './DropdownMenu.styled';

// import Image from 'next/image';

const StyledAppBar = styled(AppBar)`
    background-color: black;
`;

const StyledToolBar = styled(ToolBar)`
    justify-content: space-between;
    padding: 0 2rem;
`;

const HeaderAppLogoContainer = styled.div`
    /* border: 1px solid yellow; */
    cursor: pointer;
`;

const NavToolsContainer = styled.div`
    /* border: 1px solid green; */
    display: flex;
`;

const NavToolsLg = styled.div`
    /* border: 1px solid yellow; */
    display: flex;
    justify-content: space-between;
    font-weight: 700;

    & > div {
        align-self: center;
    }
    @media(max-width:699px){
        display: none;
    }
   
`;

const NavToolsMobile = styled.div`
    @media(min-width:700px){
        display: none;
    }
`;

const NavToolButton = styled(Button)`
    color: #fff;
    text-transform: capitalize;
    /* border: 1px solid blue; */
`;

const SpecialNavToolButton = styled(StyledButton)`
    text-transform: capitalize;
    height: fit-content;
    align-self: center;
    margin: 0 1rem;
`;
const HeaderExploreDropdownMenu = styled(ExploreDropdownMenu)`
    background-color: #fff;
    color: black;
    margin-top: 1.03rem;
    margin-left: -1.75rem;
    width: 16.58%;
    @media(min-width: 901px){
        width: 10.58%;
    }
`;

const UserProfileDropdown = styled(ButtonWithIcon)`
    border: none;
`;

const UserAvatar = styled(Avatar)`
        width: 30px;
        height: 30px;
`;

export {
  StyledAppBar, StyledToolBar, HeaderAppLogoContainer, NavToolsContainer, NavToolsLg,
  NavToolsMobile, NavToolButton, SpecialNavToolButton, HeaderExploreDropdownMenu,
  UserProfileDropdown, UserAvatar,
};
