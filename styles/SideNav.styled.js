import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { GlobalDropdownLink, GlobalDropdownMenu } from './Global.styled';

const StyledDrawer = styled(Drawer)`
    & .MuiPaper-root {
        background-color: black;
        width: 60%;
    }
`;

const StyledSideDrawer = styled.div`
    color: #fff;
    padding: 0 .89rem;
    
`;

const CloseIconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    /* border: 1px solid blue; */
    padding-top: .89rem;
    margin-bottom: .84rem;
    
    & > .MuiSvgIcon-root {
        font-size: 2.56rem;
    }
`;

const SidenavDropdownMenu = styled(GlobalDropdownMenu)`

`;
const SidenavDropdownLink = styled(GlobalDropdownLink)`
    text-align: start;
`;

const SidenavLoginBtn = styled(Button)`
    color: #fff;
    text-transform: capitalize;
    margin: 1rem 0;
    /* border: 1px solid blue; */
`;
export {
  StyledDrawer, StyledSideDrawer, CloseIconContainer, SidenavDropdownMenu,
  SidenavDropdownLink, SidenavLoginBtn,
};
