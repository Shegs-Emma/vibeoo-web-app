import { useState, Dispatch } from 'react';
import NextLink from 'next/link';
import { ExploreNavigationLg, ExploreNavLgLink } from '../styles/ExploreNavLinkLg.styled';
import { getExploreUrlName } from '../lib/utils/app-path';

type Props = {
  currentContent?: string;
  exploreIndex?: boolean;
  exploreUrlNames: Array<string>;
  setRectTitle?: Dispatch<string>;
}

const ExploreNavLinkLg = ({ exploreUrlNames, currentContent, exploreIndex, setRectTitle }:Props) => {
  const [indexPageCurrContent, setIndexPageCurrContent] = useState('all');
  return (
    <ExploreNavigationLg>
      {
        exploreIndex
          ? exploreUrlNames.map((path, idx) => (
            <ExploreNavLgLink
              key={idx}
              isActiveContent={indexPageCurrContent === path}
              onClick={() => {
                setIndexPageCurrContent(path);
                if (setRectTitle) setRectTitle(path);
              }}
            >
              { `${path[0].toUpperCase()}${path.substr(1)}` }
            </ExploreNavLgLink>
          ))
          : exploreUrlNames.map((path, idx) => (
            <NextLink
              key={idx}
              href={path === 'all' ? '/listen/' : `/listen/${path.toLowerCase()}`}
              passHref
            >
              <ExploreNavLgLink isActiveContent={currentContent === path}>
                { `${path[0].toUpperCase()}${path.substr(1)}` }
              </ExploreNavLgLink>
            </NextLink>
          ))
        }
    </ExploreNavigationLg>
  );
};

export default ExploreNavLinkLg;
