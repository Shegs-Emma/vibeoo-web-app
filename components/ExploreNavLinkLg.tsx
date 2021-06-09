import { useState, Dispatch } from 'react';
import NextLink from 'next/link';
import { ExploreNavigationLg, ExploreNavLgLink } from '../styles/ExploreNavLinkLg.styled';
import { getExploreUrlName } from '../utils/app-path';

type Props = {
  currentContent?: string;
  exploreIndex?: boolean;
  setRectTitle?: Dispatch<string>;
}

const ExploreNavLinkLg = ({ currentContent, exploreIndex, setRectTitle }:Props) => {
  const [indexPageCurrContent, setIndexPageCurrContent] = useState('All');
  return (
    <ExploreNavigationLg>
      {
        exploreIndex
          ? getExploreUrlName().map((path, idx) => (
            <ExploreNavLgLink
              key={idx}
              isActiveContent={indexPageCurrContent === path}
              onClick={() => {
                setIndexPageCurrContent(path);
                if (setRectTitle) setRectTitle(path);
              }}
            >
              { path }
            </ExploreNavLgLink>
          ))
          : getExploreUrlName().map((path, idx) => (
            <NextLink
              key={idx}
              href={path === 'All' ? '/listen/' : `/listen/${path.toLowerCase()}`}
              passHref
            >
              <ExploreNavLgLink isActiveContent={currentContent === path}>
                { path }
              </ExploreNavLgLink>
            </NextLink>
          ))
        }
    </ExploreNavigationLg>
  );
};

export default ExploreNavLinkLg;
