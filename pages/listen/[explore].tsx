import { useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths } from 'next';
import Image from 'next/image';
 import { useQuery  } from 'react-query'
 import { getShowCategories, getCategoryAllEpisodes } from '../../lib/api/show-api-helpers';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppLayout from '../../components/Layout';
import EpisodeItems from '../../components/EpisodeItems';
import ExploreDropdown from '../../components/DropdownMenu';
import {
  BannerContainer, BannerImgContainer, BannerText, ExploreNavigationContainer,
  RecommendationDropdownBtn, RecommendationDropdownMenu, RecommendationDropdownLink, ExploreEpisodesContainer
} from '../../styles/Explore.styled';
import { StyledButton } from '../../styles/Global.styled';
import { HomeBannerSecondaryText } from '../../styles/Home.styled';
// import { ExploreDropdownBtn } from '../../styles/ExploreDropdown.styled';

interface Props {
  pageName: string;
}

const recommendations = ['All Episodes', 'Popular Episodes', 'Hottest Episodes', 'Latest Episodes'];

const ListenIn = ({ pageName }:Props) => {
  // const router = useRouter();
  const [currentRecommendation, setCurrentRecommendation] = useState('All Episodes');
  const [showDropdownDesktop, setDropdownStatusDesktop] = useState(false);
  const [showDropdownMobile, setDropdownStatusMobile] = useState(false);
  const { isLoading, error, data } = useQuery(`get${pageName}AllEpisodes`,() => getCategoryAllEpisodes(pageName))

  // console.log(router);
  return (
    <AppLayout>
      <BannerContainer>
        <BannerImgContainer>
          <Image
            src="/explore_banner_img.svg"
            alt="phone with girl"
            width={300}
            height={250}
            layout="intrinsic"
          />
        </BannerImgContainer>
        <div>
          <BannerText
            component="h1"
          >
            {pageName}
          </BannerText>
          <HomeBannerSecondaryText variant="body2" component="p" paragraph>
            Tourists require No Login and Citizen access,
            All Features Subscribe to TurnUpAfrica to Stay Tuned.

          </HomeBannerSecondaryText>
          <RecommendationDropdownBtn
            aria-controls="recommendation-desktop-dropdown-menu"
            aria-haspopup="true"
            variant="contained"
            endIcon={<ArrowDropDownIcon />}
            screensize="desktop"
            onClick={() => setDropdownStatusDesktop(!showDropdownDesktop)}
          >
            {currentRecommendation}

          </RecommendationDropdownBtn>
          <RecommendationDropdownMenu open={showDropdownDesktop}>
            {
          recommendations.map((recommendation, idx) => (
            <MenuItem
              key={idx}
              onClick={() => {
                setCurrentRecommendation(recommendation);
              }}
              // isActiveContent={currentRecommendation === recommendation}
            >
              { recommendation }
            </MenuItem>
          ))
        }
          </RecommendationDropdownMenu>
        </div>
      </BannerContainer>
      <ExploreEpisodesContainer>
        {
          !isLoading && !error ? 
              data.length ?
           (
            <EpisodeItems episodes={data}/>
            ):(
            <p>No show found for {pageName} category</p>
            ):(
            null
            )
        }
      </ExploreEpisodesContainer>
    </AppLayout>
  );
};


export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { explore: 'comedy' } },
    { params: { explore: 'education' } },
    { params: { explore: 'enterprise' } },
    { params: { explore: 'inspiration' } },
    { params: { explore: 'knowledge' } },
    { params: { explore: 'lifestyle' } },
    { params: { explore: 'news' } },
    { params: { explore: 'politics' } },
    { params: { explore: 'spirituality' } },
    { params: { explore: 'sports' } },
    { params: { explore: 'technology' } },
  ],
  fallback: false,
});

type Params = {
  params: {
    explore: string
  }
}

export const getStaticProps = async ({ params: { explore } }: Params) => {
  switch (explore) {
    case 'comedy':
      return { props: { apiType: 'api-automobile', pageName: 'Comedy' } };
    case 'education':
      return { props: { apiType: 'api-baby', pageName: 'Education' } };
    case 'enterprise':
      return { props: { apiType: 'api-care', pageName: 'Enterprise' } };
    case 'inspiration':
      return { props: { apiType: 'api-computing', pageName: 'Inspiration' } };
    case 'knowledge':
      return { props: { apiType: 'api-edible', pageName: 'Knowledge' } };
    case 'lifestyle':
      return { props: { apiType: 'api-electronics', pageName: 'Lifestyle' } };
    case 'news':
      return { props: { apiType: 'api-fashion', pageName: 'News' } };
    case 'politics':
      return { props: { apiType: 'api-home-kitchen', pageName: 'Politics' } };
    case 'spirituality':
      return { props: { apiType: 'api-office-school', pageName: 'Spirituality' } };
    case 'sports':
      return { props: { apiType: 'api-phone', pageName: 'Sports' } };
    case 'technology':
      return { props: { apiType: 'api-sports', pageName: 'Technology' } };
    default:
      return {};
  }
};

export default ListenIn;
