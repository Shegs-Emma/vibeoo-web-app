import { useState, Dispatch } from 'react';
import NextLink from 'next/link';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { ExploreDropdownBtn, ExploreDropdownMenu, ExploreDropdownLink } from '../styles/DropdownMenu.styled';
import { getExploreUrlName } from '../utils/app-path';

type Props = {
  currentContent?: string | string[];
  usagePage: 'listen-in-index' | 'mobile-side-nav' | 'listen-in';
  setRectTitle?: Dispatch<string>;
}

const ExploreDropdown = ({ currentContent = 'All', usagePage, setRectTitle }:Props) => {
  const [indexPageCurrContent, setIndexPageCurrContent] = useState('All');
  const [showDropdown, setDropdownStatus] = useState(false);

  return (
    <>
      <ExploreDropdownBtn
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        endIcon={<ArrowDropDownIcon />}
        onClick={() => setDropdownStatus(!showDropdown)}
      >
        {usagePage ? indexPageCurrContent : currentContent}
      </ExploreDropdownBtn>
      <ExploreDropdownMenu
        open={showDropdown}
      >
        {
          usagePage
            ? getExploreUrlName().map((path, idx) => (
              <MenuItem
                key={idx}
                onClick={() => {
                  setIndexPageCurrContent(path);
                  if (setRectTitle) setRectTitle(path);
                }}
              >
                <ExploreDropdownLink isActiveContent={indexPageCurrContent === path}>
                  { path }
                </ExploreDropdownLink>
              </MenuItem>
            ))
            : getExploreUrlName().map((path, idx) => (
              <MenuItem key={idx}>
                <NextLink href={path === 'All' ? '/listen/' : `/listen/${path.toLowerCase()}`} passHref>
                  <ExploreDropdownLink isActiveContent={currentContent === path}>
                    { path }
                  </ExploreDropdownLink>
                </NextLink>
              </MenuItem>
            ))
        }
      </ExploreDropdownMenu>
    </>
  );
};

export default ExploreDropdown;
