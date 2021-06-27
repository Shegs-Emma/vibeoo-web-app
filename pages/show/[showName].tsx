import Image from 'next/image';
import { useState } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths } from 'next';
 import { getShowSlugs, getShowViaSlug } from '../../lib/utils/show/show-helpers';
import AppLayout from '../../components/Layout';
import {
  ShowPageContainer,
  ShowPageBannerContainer,
  ShowInfoContainer,
  ShowImageContainer,
  ShowDescContainer,
  ShowTitle,
  ShowAuthor,
  ShowGenre,
  ShowFollowBtn,
  ShareShowContainer,
} from '../../styles/Show.styled';

interface ShowPageProps {
  showDetails: {
    hostName: string;
    showName: string;
    showLogo: string;
    showCategory: string;
  };
}

const ShowPage = ({ showDetails }:ShowPageProps) => {
  const [isFollowing, setFollowing] = useState(false);
  return (
    <AppLayout>
      <ShowPageContainer>
        <ShowPageBannerContainer>
          <ShowInfoContainer>
            <ShowImageContainer>
              <Image
                src={showDetails.showLogo}
                alt="episode art"
                width={200}
                height={200}
                layout="responsive"
              />
            </ShowImageContainer>
            <ShowDescContainer>
              <ShowTitle variant="h2">{showDetails.showName}</ShowTitle>
              <ShowAuthor variant="h6" component="body1">
                {showDetails.hostName}
              </ShowAuthor>
              <ShowGenre variant="h6" component="body1">
                {showDetails.showCategory}
              </ShowGenre>
              <ShowFollowBtn
                isFollowing={isFollowing}
                onClick={() => setFollowing(!isFollowing)}
              >
                {isFollowing ? 'following' : 'follow'}
              </ShowFollowBtn>
            </ShowDescContainer>
          </ShowInfoContainer>
          <ShareShowContainer>
            <div>
              <Image
                src="/whatsapp.svg"
                alt="whatsapp share icon"
                width={20}
                height={20}
                layout="intrinsic"
              />
            </div>
            <div>
              <Image
                src="/facebook_dark.svg"
                alt="facebook share icon"
                width={20}
                height={20}
                layout="intrinsic"
              />
            </div>
            <div>
              <Image
                src="/twitter_dark.svg"
                alt="twitter share icon"
                width={20}
                height={20}
                layout="intrinsic"
              />
            </div>
          </ShareShowContainer>
        </ShowPageBannerContainer>
      </ShowPageContainer>
    </AppLayout>
  );
};

interface Paramsd extends ParsedUrlQuery {
    showName: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getShowSlugs();
    const paths = data.map((slug:string) => ({
    params: { showName: slug },
  }))
  return { paths, fallback: false }
}

type Params = {
  params: {
    showName: string
  }
}


export const getStaticProps = async ({ params: { showName } }: Params) => {
  const show = await getShowViaSlug(showName);
  return {
    props: {showDetails: show}
  }
};

export default ShowPage;
