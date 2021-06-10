import dynamic from 'next/dynamic';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { LoggedInPlayerContainer } from '../styles/LoggedInPodcastPlayer.styled';
import PodcastPlayer from './PodcastPlayer';

const DynamicPodcastPlayer = dynamic(
  () => import('./PodcastPlayer'),
  { ssr: false },
);

const LoggedInPodcastPlayer = () => {
  const podcastPlayerState = useAppSelector((state) => state.podcastPlayer);
  return (
    <LoggedInPlayerContainer>
      <PodcastPlayer podcastData={{
        podcastImageUrl: 'https://vibeoo-uploads.s3.amazonaws.com/1529445187IsGo.jpg',
        podcastTitle: 'Issa Goal',
        podcastNaration: '',
        podcastAudioUrl: 'https://vibeoo-uploads.s3.eu-west-2.amazonaws.com/143723456521-WFYW-S02E26--5-Questions-Every-Man-Should-Answer.mp3',
      }}
      />
    </LoggedInPlayerContainer>
  );
};

export default LoggedInPodcastPlayer;
