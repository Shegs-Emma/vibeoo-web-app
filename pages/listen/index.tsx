import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Divider from '@material-ui/core/Divider';
import { useState } from 'react';
import AppLayout from '../../components/Layout';
import ExploreDropdown from '../../components/DropdownMenu';
import ExploreNavLinkLg from '../../components/ExploreNavLinkLg';
import {
  BannerContainer, BannerImgContainer, BannerText, ExploreNavigationContainer,
  ExploreRecommendationContainer, ExploreRecommendationTitle, ListenIndexContainer,
} from '../../styles/Explore.styled';
import { StyledButton } from '../../styles/Global.styled';
import EpisodeItems from '../../components/EpisodeItems';

const DynamicExploreRecommendation = dynamic(
  () => import('../../components/ExploreRecommendation'),
  { ssr: false },
);

const ListenHome = () => {
  const router = useRouter();
  const [rectTitle, setRectTitle] = useState('All');
  // console.log(router);
  return (
    <AppLayout>
      <ListenIndexContainer>
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
              component="h2"
            >
              Discover, curate and broadcast audio content by amazing creators with Radio On Demand
            </BannerText>
            <StyledButton variant="contained" bgcolor="light" onClick={() => router.push('/listen')}>
              Upload show
            </StyledButton>
          </div>
        </BannerContainer>
        <ExploreNavigationContainer>
          <ExploreDropdown usagePage="listen-in-index" setRectTitle={setRectTitle} />
          <ExploreNavLinkLg exploreIndex setRectTitle={setRectTitle} />
        </ExploreNavigationContainer>
        <ExploreRecommendationContainer>
          <ExploreRecommendationTitle>
            Recent episodes (
            {' '}
            {rectTitle}
            {' '}
            )
          </ExploreRecommendationTitle>
          <DynamicExploreRecommendation>
            <EpisodeItems />
          </DynamicExploreRecommendation>
        </ExploreRecommendationContainer>
        <Divider />
      </ListenIndexContainer>
    </AppLayout>
  );
};

export default ListenHome;
