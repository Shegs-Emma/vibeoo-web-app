import { useState, Dispatch } from 'react';
import NextLink from 'next/link';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { showModalDialog } from '../redux/modal/modalSlice';
import { useAppDispatch } from '../redux/hooks';
import { getExploreUrlName } from '../utils/app-path';

import {
  StyledDrawer, StyledSideDrawer, CloseIconContainer, SidenavDropdownMenu, SidenavDropdownLink,
  SidenavLoginBtn,
} from '../styles/SideNav.styled';
import { StyledButton, ButtonWithIcon } from '../styles/Global.styled';

interface Props {
    showRightDrawer: boolean;
    setRightDrawer: Dispatch<boolean>;
    currentPage: string;
}

const SideNav = ({ showRightDrawer, setRightDrawer, currentPage }:Props) => {
  const dispatch = useAppDispatch();
  const [showDropdown, setDropdownStatus] = useState(false);
  return (
    <StyledDrawer anchor="right" open={showRightDrawer}>
      <StyledSideDrawer>
        <CloseIconContainer>
          <CloseIcon onClick={() => setRightDrawer(!showRightDrawer)} />
        </CloseIconContainer>
        <StyledButton onClick={() => dispatch(showModalDialog('signup'))}>Sign up</StyledButton>
        <br />
        <SidenavLoginBtn onClick={() => dispatch(showModalDialog('login'))}>Login</SidenavLoginBtn>
        <br />
        <ButtonWithIcon
          aria-controls="sidenav-explore-dropdown button"
          aria-haspopup="true"
          variant="contained"
          endIcon={showDropdown ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          onClick={() => setDropdownStatus(!showDropdown)}
        >
          {currentPage}

        </ButtonWithIcon>
        <SidenavDropdownMenu open={showDropdown}>
          {
          getExploreUrlName().slice(1).map((path, idx) => (
            <MenuItem key={idx}>
              <NextLink href={`/listen/${path.toLowerCase()}`} passHref>
                <SidenavDropdownLink isActiveContent={currentPage === path.toLowerCase()}>
                  <ListItemIcon>
                    <MailIcon fontSize="small" />
                  </ListItemIcon>
                  { path }
                </SidenavDropdownLink>
              </NextLink>
            </MenuItem>
          ))
        }

        </SidenavDropdownMenu>

        {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      </StyledSideDrawer>
    </StyledDrawer>
  );
};

export default SideNav;
