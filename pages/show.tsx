import Image from 'next/image';
import { useState } from 'react';
import AppLayout from '../components/Layout';
import {
  ShowPageContainer, ShowPageBannerContainer, ShowInfoContainer,
  ShowImageContainer, ShowDescContainer, ShowTitle, ShowAuthor, ShowGenre,
  ShowFollowBtn, ShareShowContainer,
} from '../styles/Show.styled';

const ShowPage = () => {
  const [isFollowing, setFollowing] = useState(false);
  return (
    <AppLayout>
      <ShowPageContainer>
        <ShowPageBannerContainer>
          <ShowInfoContainer>
            <ShowImageContainer>
              <Image
                src="https://vibeoo-uploads.s3.amazonaws.com/1529445187IsGo.jpg"
                alt="episode art"
                width={200}
                height={200}
                layout="responsive"
              />
            </ShowImageContainer>
            <ShowDescContainer>
              <ShowTitle variant="h2">
                Issa goal
              </ShowTitle>
              <ShowAuthor variant="h6" component="p">
                mimi onalaja
              </ShowAuthor>
              <ShowGenre variant="h6" component="p">
                lifestyle
              </ShowGenre>
              <ShowFollowBtn
                isFollowing={isFollowing}
                onClick={() => setFollowing(!isFollowing)}
              >
                { isFollowing ? 'following' : 'follow'}

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

export default ShowPage;
