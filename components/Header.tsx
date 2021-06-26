import { useRouter } from 'next/router';
import NextLink from 'next/link';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/client';
import { useAppDispatch } from '../redux/hooks';
import {
  StyledAppBar, StyledToolBar, HeaderAppLogoContainer, NavToolsContainer, NavToolsLg,
  NavToolsMobile, NavToolButton, SpecialNavToolButton, HeaderExploreDropdownMenu,
  UserProfileDropdown, UserAvatar,
} from '../styles/Header.styled';
import SideNav from './SideNav';
import { getExploreUrlName } from '../lib/utils/app-path';
import { showModalDialog } from '../redux/modal/modalSlice';
import { ExploreDropdownLink } from '../styles/DropdownMenu.styled';
import { ButtonWithIcon } from '../styles/Global.styled';

const AppHeader = () => {
  const [session, loading] = useSession();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const currentPage = router.query.explore || 'explore';
  const [showRightDrawer, setRightDrawer] = useState(false);
  const [showDropdown, setDropdownStatus] = useState(false);
  const [showProfileDropdown, setProfileDropdownStatus] = useState(false);
  useEffect(() => {
    setDropdownStatus(false);
  }, [router.query.explore]);
  // console.log('head-sess', session);
  // console.log('head-load', loading);
  return (
    <StyledAppBar position="static" color="secondary">
      <StyledToolBar>
        <HeaderAppLogoContainer onClick={() => router.push('/')}>
          <Image
            src="/logo_vibeoo.svg"
            alt="vibeoo website logo"
            width={100}
            height={50}
            layout="intrinsic"
          />
        </HeaderAppLogoContainer>
        <NavToolsContainer>
          <IconButton color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <NavToolsLg>
            <div>
              <ButtonWithIcon
                aria-controls="navbar-explore-dropdown button"
                aria-haspopup="true"
                variant="contained"
                endIcon={showDropdown ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
                onClick={() => setDropdownStatus(!showDropdown)}
              >
                {currentPage}

              </ButtonWithIcon>
              <HeaderExploreDropdownMenu
                open={showDropdown}
              >
                {
          getExploreUrlName().slice(1).map((path, idx) => (
            <MenuItem key={idx}>
              <NextLink href={`/listen/${path.toLowerCase()}`} passHref>
                <ExploreDropdownLink isActiveContent={currentPage === path.toLowerCase()}>
                  { path }
                </ExploreDropdownLink>
              </NextLink>
            </MenuItem>
          ))
        }
              </HeaderExploreDropdownMenu>

            </div>
            {
          session && !loading
            ? (
              <div>
                <UserProfileDropdown
                  aria-controls="navbar-loggedin-dropdown button"
                  aria-haspopup="true"
                  variant="contained"
                  startIcon={<UserAvatar alt={session?.user.username} src={session?.user.profilePicture} />}
                  endIcon={showProfileDropdown ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
                  onClick={() => setProfileDropdownStatus(!showProfileDropdown)}
                >
                  {session.user.username}

                </UserProfileDropdown>
                <HeaderExploreDropdownMenu open={showProfileDropdown}>
                  <MenuItem
                    onClick={async () => {
                      const { url } = await signOut({ redirect: false, callbackUrl: '/' });
                      router.push(url);
                    }}
                  >
                    Log Out
                  </MenuItem>
                </HeaderExploreDropdownMenu>
              </div>
            )
            : (
              <>
                <SpecialNavToolButton
                  onClick={() => dispatch(showModalDialog('signup'))}
                >
                  Sign up
                </SpecialNavToolButton>
                <NavToolButton
                  onClick={() => dispatch(showModalDialog('login'))}
                >
                  Login

                </NavToolButton>
              </>
            )
        }

          </NavToolsLg>
          <NavToolsMobile>
            <IconButton color="inherit" aria-label="menu" onClick={() => setRightDrawer(!showRightDrawer)}>
              <MenuIcon />
            </IconButton>
          </NavToolsMobile>
        </NavToolsContainer>
        <SideNav
          showRightDrawer={showRightDrawer}
          setRightDrawer={setRightDrawer}
          currentPage={currentPage as string}
        />
      </StyledToolBar>

    </StyledAppBar>
  );
};

export default AppHeader;
