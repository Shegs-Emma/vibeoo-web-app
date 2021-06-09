import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  VisitorPlayerContainer, VisitorPlayerHeading,
  VisitorPlayerImageContainer, VisitorPlayerTitle, VisitorPlayerDesc,
} from '../styles/VisitorPodcastPlayer.styled';
import stringTruncate from '../utils/string-truncate';

const DynamicPodcastPlayer = dynamic(
  () => import('./PodcastPlayer'),
  { ssr: false },
);

const VisitorPodcastPlayer = () => {
  const podcastPlayerState = useAppSelector((state) => state.podcastPlayer);
  return (
    <VisitorPlayerContainer>
      <VisitorPlayerHeading variant="h5">Podcast</VisitorPlayerHeading>
      <VisitorPlayerImageContainer>
        <Image
          src={podcastPlayerState.podcastImageUrl}
          alt="episode art"
          width={100}
          height={100}
          layout="responsive"
        />
      </VisitorPlayerImageContainer>
      <VisitorPlayerTitle
        variant="h5"
        noWrap
      >
        {stringTruncate(podcastPlayerState.podcastTitle, 10)}

      </VisitorPlayerTitle>
      <VisitorPlayerDesc>{stringTruncate(podcastPlayerState.podcastNaration)}</VisitorPlayerDesc>
      <DynamicPodcastPlayer podcastData={podcastPlayerState} />
    </VisitorPlayerContainer>

  );
};

export default VisitorPodcastPlayer;
